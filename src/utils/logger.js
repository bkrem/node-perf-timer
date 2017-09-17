/* eslint no-console: 0 */
const chalk = require('chalk');

const units = require('./units');

function printDiff(diffTuple, precision = undefined, msg) {
  const s = diffTuple[0];
  const ms = precision
    ? units.nanoToMilli(diffTuple[1]).toFixed(precision)
    : units.nanoToMilli(diffTuple[1]);

  console.log();
  msg &&
    console.log(
      chalk.magenta(`${chalk.magenta.underline.bold('Message')}: ${msg}`),
    );
  console.log(
    `${chalk.cyan.underline.bold('Duration')}: ${chalk.red.bold(
      `${s} s`,
    )}, ${chalk.yellow(`${ms} ms`)}`,
  );
  console.log();
}

const logger = { printDiff };
module.exports = logger;
