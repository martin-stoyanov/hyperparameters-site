export default
`
async function trainModel({ numLayers, optimizer }, { xTrain, yTrain, xTest, yTest }) {
  const optimizers = {
    sgd: tf.train.sgd,
    adagrad: tf.train.adagrad,
    adam: tf.train.adam,
    adamax: tf.train.adamax,
    rmsprop: tf.train.rmsprop,
  };
  const model = tf.sequential(); // creating a simple model

  // adding random number of layers
  for (let i = 0; i < numLayers; i += 1) {
    model.add(tf.layers.dense({
      inputShape: i === 0 ? [4] : [5], // if first layer
      activation: 'sigmoid',
      units: i === numLayers - 1 ? 3 : 5,
    }));
  }
  model.compile({
    loss: 'categoricalCrossentropy',
    metrics: ['accuracy'],
    optimizer: optimizers[optimizer](0.01),
  });
  // Train the model using the data.
  const h = await model.fit(xTrain, yTrain, { 
    epochs: 10, 
    validationData: [xTest, yTest],
    callbacks: { onEpochEnd } });
  return { model, h };
}

// fmin optmization function, retuns the loss and a STATUS_OK
async function modelOpt({ optimizer, numLayers }, { xTrain, yTrain, xTest, yTest }) {
  const { h, model } = await trainModel({ optimizer, numLayers }, { xTrain, yTrain, xTest, yTest });
  
  const preds = model.predict(xTest).argMax(-1);
  const labels = yTest.argMax(-1);
  const confMatrixData = await tfvis.metrics.confusionMatrix(labels, preds);

  return { 
    accuracy: h.history.acc[h.history.acc.length - 1],
    history: h.history,
    confMatrixData,
    status: hpjs.STATUS_OK
  };
}

// hyperparameters search space
// optmizer is a choice field
// layers ia an integer value from 1 to 5 with a step of 1
const space = {
  optimizer: hpjs.choice(['sgd', 'adam', 'adagrad', 'rmsprop']),
  numLayers: hpjs.quniform(1, 5, 1),
};
// Generate some synthetic data for training. (y = 2x - 1) and pass to fmin as parameters
// data will be passed as a parameters to the fmin
const [xTrain, yTrain, xTest, yTest] = data.getIrisData(0.15);

return await hpjs.fmin(
  modelOpt, space, hpjs.search.randomSearch, 10,
  { rng: new hpjs.RandomState(654321), xTrain, yTrain, xTest, yTest, callbacks: { onExperimentBegin, onExperimentEnd } }
);
`;
