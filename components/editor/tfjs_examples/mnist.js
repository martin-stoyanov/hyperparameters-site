export default
`
// training function, called by the optimization function
  // eslint-disable-next-line no-unused-vars
  async function trainModel({ kernelSize }, { trainData, testData }) {
    kernelSize = 3;
    const model = tf.sequential(); // creating a simple model

    model.add(tf.layers.conv2d({
      inputShape: [28, 28, 1], // data is 28*28 px
      kernelSize,
      filters: 16,
      activation: 'relu',
    }));
    model.add(tf.layers.maxPooling2d({ poolSize: 2, strides: 2 }));
    model.add(tf.layers.conv2d({ kernelSize, filters: 32, activation: 'relu' }));
    model.add(tf.layers.maxPooling2d({ poolSize: 2, strides: 2 }));
    model.add(tf.layers.conv2d({ kernelSize, filters: 32, activation: 'relu' }));
    model.add(tf.layers.flatten({}));
    model.add(tf.layers.dense({ units: 64, activation: 'relu' }));
    model.add(tf.layers.dense({ units: 10, activation: 'softmax' }));
    model.summary();
    console.log('1');
    model.compile({
      optimizer: 'rmsprop',
      loss: 'categoricalCrossentropy',
      metrics: ['accuracy'],
    });
    console.log('2');
    const validationSplit = 0.15;

    // Train the model using the data.
    const h = await model.fit(trainData.xs, trainData.labels, {
      validationData: [testData.xs, testData.labels],
      validationSplit,
      epochs: 4,
      callbacks: { onEpochEnd },
    });
    console.log('3');
    console.log(h);
    return { model, h };
  }

  // fmin optmization function, retuns the accuracy, history, confusion matrix data, and a STATUS_OK
  async function modelOpt({ kernelSize }, { trainData, testData }) {
    // eslint-disable-next-line no-unused-vars
    const { h, model } = await trainModel({ kernelSize }, { trainData, testData });

    return {
      accuracy: h.history.acc[h.history.acc.length - 1],
      history: h.history,
      status: hpjs.STATUS_OK,
    };
  }

  // hyperparameters search space
  // kernelSize is an integer value from 2 to 5 with a step of 1
  const space = {
    kernelSize: hpjs.quniform(2, 5, 1),
  };

  // Getting data to train, using the tensorflowjs mnist example's data
  console.log(data);
  const trainData = data.getTrainData();
  const testData = data.getTestData();

  console.log(trainData);
  console.log(testData);

  return hpjs.fmin(
    modelOpt, space, hpjs.search.randomSearch, 3,
    {
      rng: new hpjs.RandomState(54321),
      trainData,
      testData,
      callbacks: { onExperimentBegin, onExperimentEnd },
    }
  );
`;
