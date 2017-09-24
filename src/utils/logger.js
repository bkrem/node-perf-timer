/* eslint no-console: 0 */
const units = require('./units');

function printDiff(diffTuple, precision, msg) {
  const s = diffTuple[0];
  const ms = precision
    ? units.nanoToMilli(diffTuple[1]).toFixed(precision)
    : units.nanoToMilli(diffTuple[1]);

  console.log();
  msg && console.log(`Message: ${msg}`);
  console.log(`Duration: ${s} s, ${ms} ms`);
  console.log();
}

const logger = { printDiff };
module.exports = logger;
