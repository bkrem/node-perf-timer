/* eslint no-console: 0 */

function prettyPrint(initial, elapsed, precision, note) {
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

const logger = { prettyPrint };
module.exports = logger;
