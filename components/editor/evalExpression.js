import * as tf from '@tensorflow/tfjs';
import * as hpjs from 'hyperparameters';

// from https://github.com/tensorflow/tfjs-website/blob/master/themes/dljs/source/js/codeSnippets.js
function getErrorLine(error) {
  try {
    // firefox
    const firefoxRegex = /eval:(\d+):\d+/;
    if (error.stack.match(firefoxRegex)) {
      const res = error.stack.match(firefoxRegex);
      return parseInt(res[1], 10);
    }

    // chrome
    const chromeRegex = /eval.+:(\d+):\d+/;
    if (error.stack.match(chromeRegex)) {
      const res = error.stack.match(chromeRegex);
      return parseInt(res[1], 10);
    }
  } catch (e) {
    return undefined;
  }
  return undefined;
}

export default async (expression, formatSnippet = p => p, params = {}) => {
  const errors = [];
  const reportError = (e) => {
    const error = { type: 'error' };
    const lineNumber = getErrorLine(e);
    if (lineNumber !== undefined) {
      error.row = lineNumber - 1;
    }
    error.text = e.message;
    errors.push(error);
  };

  // eslint-disable-next-line no-unused-vars
  const onExperimentBegin = async (i, trial) => {
    if (params.onExperimentBegin) {
      const res = params.onExperimentBegin(i, trial);
      await tf.nextFrame();
      return res;
    }
    return false;
  };

  // eslint-disable-next-line no-unused-vars
  const onExperimentEnd = async (i, trial) => {
    if (params.onExperimentEnd) {
      const res = params.onExperimentEnd(i, trial);
      await tf.nextFrame();
      return res;
    }
    return false;
  };
  // eslint-disable-next-line no-unused-vars
  const onEpochEnd = async (epoch, logs) => {
    if (params.onEpochEnd) {
      params.onEpochEnd(epoch, logs);
    }
    await tf.nextFrame();
  };

  const evalString = `(async function runner() { try { ${formatSnippet(expression)
  }} catch (e) { reportError(e); } })()`;

  window.hpjs = hpjs;
  window.tf = tf;
  window.data = params.data;
  let value;
  tf.ENV.engine.startScope();
  try {
    // eslint-disable-next-line no-eval
    value = await eval(evalString)
      .catch((e) => {
        // This catch is for errors within promises within snippets
        reportError(e);
      });
  } catch (e) {
    reportError(e);
  }
  tf.ENV.engine.endScope();
  window.hpjs = undefined;
  window.tf = undefined;
  window.data = undefined;
  return { errors, value };
};

