/* eslint no-console: 0 */

const units = require('./units');

function print(initial, elapsed, precision, note) {
  console.log('************************');
  console.log('*   PERF MEASUREMENT   *');
  console.log('************************');
  console.log();
  console.log(
    `${process.hrtime(initial)[0]} s, ${elapsed.toFixed(
      precision,
    )} ms - ${note}`,
  );
  console.log();
  console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
}

function print2(diffTuple, precision = undefined, note) {
  const s = diffTuple[0];
  const ms = precision
    ? units.nanoToMilli(diffTuple[1]).toFixed(precision)
    : units.nanoToMilli(diffTuple[1]);
  console.log(`${s} s, ${ms} ms - ${note}`);
}

const logger = { print, print2 };
module.exports = logger;
