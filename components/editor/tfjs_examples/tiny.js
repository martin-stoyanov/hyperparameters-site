export default
`async function trainModel({ optimizer, epochs }, { xs, ys }) {
  // Create a simple model.
  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
  // Prepare the model for training: Specify the loss and the optimizer.
  model.compile({
    loss: 'meanSquaredError',
    optimizer
  });
  // Train the model using the data.
  const h = await model.fit(xs, ys, { epochs, callbacks: { onEpochEnd } });
  return { model, h };
}

// fmin optimization function, returns the loss and a STATUS_OK
async function modelOpt({ optimizer, epochs }, { xs, ys }) {
  const { h } = await trainModel({ optimizer, epochs }, { xs, ys });
  return { loss: h.history.loss[h.history.loss.length - 1], history: h.history, status: hpjs.STATUS_OK };
}

// hyperparameters search space
// optimizer is a choice field
// epochs ia an integer value from 10 to 250 with a step of 5
const space = {
  optimizer: hpjs.choice(['sgd', 'adam', 'adagrad', 'rmsprop']),
  epochs: hpjs.quniform(10, 30, 10),
};
// Generate some synthetic data for training. (y = 2x - 1) and pass to fmin as parameters
// data will be passed as a parameters to the fmin
const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1]);
const ys = tf.tensor2d([-3, -1, 1, 3, 5, 7], [6, 1]);
return await hpjs.fmin(
  modelOpt, space, hpjs.search.randomSearch, 10,
  { rng: new hpjs.RandomState(654321), xs, ys, callbacks: { onExperimentBegin, onExperimentEnd } }
);
`;
