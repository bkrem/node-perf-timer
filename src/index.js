const _prettyPrint = (initial, elapsed, precision, note) => {
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
};

function start() {
  process.hrtime();
}

function stop(initial, note, shouldPrint = true) {
  const precision = 3; // 3 decimal places
  const elapsed = process.hrtime(initial)[1] / 1000000; // divide by a million to get nano to milli
  shouldPrint && _prettyPrint(initial, elapsed, precision, note); // Pretty-print result to console
  return elapsed;
}

export default { start, stop };
