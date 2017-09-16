const logger = require('./utils/logger');
const units = require('./utils/units');

let initial = [];
const opts = {
  shouldPrint: false,
  precision: 3, // 3 decimal places
};

function config(userOpts) {
  Object.assign(opts, userOpts);
}

function start() {
  initial = process.hrtime();
  return units.tupleToNano(initial);
}

function stop(note = '') {
  const diff = process.hrtime(initial);
  const elapsed = diff[1] / 1000000; // divide by a million to get nano to milli
  if (opts.shouldPrint) {
    logger.prettyPrint(initial, elapsed, opts.precision, note); // Pretty-print result to console
  }
  return units.tupleToNano(diff);
}

const perfTimer = { config, start, stop };
module.exports = perfTimer;
