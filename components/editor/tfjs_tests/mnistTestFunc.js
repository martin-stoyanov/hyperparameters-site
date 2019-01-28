import * as tf from '@tensorflow/tfjs';
import * as hpjs from 'hyperparameters';
import * as tfvis from '@tensorflow/tfjs-vis';

export default async ({
  data, onEpochEnd, onExperimentBegin, onExperimentEnd,
}) => {
  function createDenseModel(inActivation, outActivation) {
    const model = tf.sequential();
    model.add(tf.layers.flatten({ inputShape: [28, 28, 1] }));
    model.add(tf.layers.dense({ units: 42, activation: inActivation }));
    model.add(tf.layers.dense({ units: 10, activation: outActivation }));
    return model;
  }
  function createConvModel(inActivation, outActivation) {
    const model = tf.sequential(); // creating a simple model
    const kernelSize = 4;
    model.add(tf.layers.conv2d({
      inputShape: [28, 28, 1], // data is 28*28 px
      kernelSize,
      filters: 16,
      activation: inActivation,
    }));
    model.add(tf.layers.maxPooling2d({ poolSize: 2, strides: 2 }));
    model.add(tf.layers.conv2d({ kernelSize, filters: 32, activation: inActivation }));
    model.add(tf.layers.maxPooling2d({ poolSize: 2, strides: 2 }));
    model.add(tf.layers.conv2d({ kernelSize, filters: 32, activation: inActivation }));
    model.add(tf.layers.flatten({}));
    model.add(tf.layers.dense({ units: 64, activation: inActivation }));
    model.add(tf.layers.dense({ units: 10, activation: outActivation }));
    return model;
  }

  // training function, called by the optimization function
  // eslint-disable-next-line no-unused-vars
  async function trainModel({ modelType, inActivation, outActivation },
    { trainData, testData }) {
    let model;
    if (modelType === 'ConvNet') {
      model = createConvModel(inActivation, outActivation);
    } else if (modelType === 'DenseNet') {
      model = createDenseModel(inActivation, outActivation);
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
  async function modelOpt({ modelType, inActivation, outActivation },
    { trainData, testData }) {
    // eslint-disable-next-line no-unused-vars
    const { h, model } = await trainModel({ modelType, inActivation, outActivation },
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
    inActivation: hpjs.choice(['relu', 'elu', 'relu6', 'selu', 'linear', 'sigmoid', 'tanh']),
    outActivation: hpjs.choice(['softmax', 'softplus', 'softsign']),
  };
  // Getting data to train, using the tensorflowjs mnist example's data
  const trainData = data.getTrainData();
  const testData = data.getTestData();

  return hpjs.fmin(
    modelOpt, space, hpjs.search.randomSearch, 30,
    {
      rng: new hpjs.RandomState(54321),
      trainData,
      testData,
      callbacks: { onExperimentBegin, onExperimentEnd },
    }
  );
};
