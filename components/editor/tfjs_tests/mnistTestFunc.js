import * as tf from '@tensorflow/tfjs';
import * as hpjs from 'hyperparameters';
import * as tfvis from '@tensorflow/tfjs-vis';

export default async ({
  data, onEpochEnd, onExperimentBegin, onExperimentEnd,
}) => {
  function createDenseModel(hiddenLayerActivation, lastLayerActivation) {
    const model = tf.sequential();
    model.add(tf.layers.flatten({ inputShape: [28, 28, 1] }));
    model.add(tf.layers.dense({ units: 42, activation: hiddenLayerActivation }));
    model.add(tf.layers.dense({ units: 10, activation: lastLayerActivation }));
    return model;
  }
  function createConvModel(hiddenLayerActivation, lastLayerActivation) {
    const model = tf.sequential(); // creating a simple model
    const kernelSize = 4;
    model.add(tf.layers.conv2d({
      inputShape: [28, 28, 1], // data is 28*28 px
      kernelSize,
      filters: 16,
      activation: hiddenLayerActivation,
    }));
    model.add(tf.layers.maxPooling2d({ poolSize: 2, strides: 2 }));
    model.add(tf.layers.conv2d({ kernelSize, filters: 32, activation: hiddenLayerActivation }));
    model.add(tf.layers.maxPooling2d({ poolSize: 2, strides: 2 }));
    model.add(tf.layers.conv2d({ kernelSize, filters: 32, activation: hiddenLayerActivation }));
    model.add(tf.layers.flatten({}));
    model.add(tf.layers.dense({ units: 64, activation: hiddenLayerActivation }));
    model.add(tf.layers.dense({ units: 10, activation: lastLayerActivation }));
    return model;
  }

  // training function, called by the optimization function
  // eslint-disable-next-line no-unused-vars
  async function trainModel({ modelType, hiddenLayerActivation, lastLayerActivation },
    { trainData, testData }) {
    let model;
    if (modelType === 'ConvNet') {
      model = createConvModel(hiddenLayerActivation, lastLayerActivation);
    } else if (modelType === 'DenseNet') {
      model = createDenseModel();
    }
    model.compile({
      optimizer: 'rmsprop',
      loss: 'categoricalCrossentropy',
      metrics: ['accuracy'],
    });

    // Train the model using the data.
    const h = await model.fit(trainData.xs, trainData.labels, {
      validationData: [testData.xs, testData.labels],
      validationSplit: 0.15,
      epochs: 4,
      callbacks: { onEpochEnd },
    });
    return { model, h };
  }

  // fmin optmization function, retuns the accuracy, history, and a STATUS_OK
  async function modelOpt({ modelType, hiddenLayerActivation, lastLayerActivation },
    { trainData, testData }) {
    // eslint-disable-next-line no-unused-vars
    const { h, model } = await trainModel({ modelType, hiddenLayerActivation, lastLayerActivation },
      { trainData, testData });

    const preds = model.predict(testData.xs)
      .argMax(-1);
    const labels = testData.labels.argMax(-1);
    const confMatrixData = await tfvis.metrics.confusionMatrix(labels, preds);

    return {
      accuracy: h.history.acc[h.history.acc.length - 1],
      history: h.history,
      confMatrixData,
      status: hpjs.STATUS_OK,
    };
  }

  // hyperparameters search space
  // modelType is a random string
  // validationSplit is a random # from 0.1-0.25
  const space = {
    modelType: hpjs.choice(['ConvNet', 'DenseNet']),
    hiddenLayerActivation: hpjs.choice(['relu', 'sigmoid', 'tanh']),
    lastLayerActivation: hpjs.choice(['softmax', 'sigmoid']),
  };

  // Getting data to train, using the tensorflowjs mnist example's data
  const trainData = data.getTrainData();
  const testData = data.getTestData();

  return hpjs.fmin(
    modelOpt, space, hpjs.search.randomSearch, 6,
    {
      rng: new hpjs.RandomState(54321),
      trainData,
      testData,
      callbacks: { onExperimentBegin, onExperimentEnd },
    }
  );
};
