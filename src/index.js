'use strict';

const logger = require('./utils/logger');
const units = require('./utils/units');

let startTuple = [];
let stopTuple = [];

const opts = {
  shouldPrint: true,
  precision: undefined,
  message: undefined,
};

/**
 * config - Accepts a config object to adjust default settings.
 * 
 * @param {any} userOpts
 * @returns {void}
 */
function config(userOpts) {
  Object.assign(opts, userOpts);
}

/**
 * start - Starts a new timer and returns the absolute start time.
 * 
 * @returns {number} nsStartTime
 */
function start() {
  startTuple = process.hrtime();
  return units.tupleToNano(startTuple);
}

/**
 * stop - Stops the current timer and returns the absolute end time.
 * 
 * @returns {number} nsEndTime
 */
function stop() {
  stopTuple = process.hrtime();
  return units.tupleToNano(stopTuple);
}

/**
 * diff - Accepts a start & end time in nanoseconds and returns the difference.
 * 
 * @param {number} nsStartTime 
 * @param {number} nsEndTime 
 * @returns {number} nsDiff
 */
function diff(nsStartTime, nsEndTime) {
  return nsEndTime - nsStartTime;
}

/**
 * stopAndDiff - Combines stop() & diff().
 * If `opts.shouldPrint` is set, the diff is logged to the console 
 * with `message` (if specified).
 * 
 * @param {string} message Optional message for logging.
 * @returns {number} nsDiff
 */
function stopAndDiff(message) {
  const diffTuple = process.hrtime(startTuple);
  const nsDiff = units.tupleToNano(diffTuple);
  if (opts.shouldPrint) {
    logger.printDiff(diffTuple, opts.precision, message || opts.message); // Pretty-print result to console
  }
  return nsDiff;
}

/**
 * stopAndRestart - Stops timer, starts a new one and returns the nanosecond
 * diff of the stopped timer.
 * 
 * @returns {number} nsDiff
 */
function stopAndRestart() {
  const nsDiff = stop();
  start();
  return nsDiff;
}

const perfTimer = {
  opts,
  config,
  start,
  stop,
  diff,
  stopAndDiff,
  stopAndRestart,
};

module.exports = perfTimer;
