const logger = require('./utils/logger');
const units = require('./utils/units');

let startTuple = [];
let stopTuple = [];

const opts = {
  shouldPrint: true,
};

function config(userOpts) {
  Object.assign(opts, userOpts);
}

function start() {
  startTuple = process.hrtime();
  return units.tupleToNano(startTuple);
}

function stop() {
  stopTuple = process.hrtime();
  return units.tupleToNano(stopTuple);
}

function diff(startTime, endTime) {
  return endTime - startTime;
}

function stopAndDiff(message) {
  const diffTuple = process.hrtime(startTuple);
  const diffNano = units.tupleToNano(diffTuple);
  if (opts.shouldPrint) {
    logger.printDiff(diffTuple, opts.precision, message); // Pretty-print result to console
  }
  return diffNano;
}

function stopAndRestart() {
  const diffNano = stop();
  start();
  return diffNano;
}

const perfTimer = { config, start, stop, diff, stopAndDiff, stopAndRestart };
module.exports = perfTimer;
