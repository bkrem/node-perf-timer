const _prettyPrint = (start, elapsed, precision, note) => {
  console.log('************************');
  console.log('*   PERF MEASUREMENT   *');
  console.log('************************');
  console.log();
  console.log(process.hrtime(start)[0] + ' s, ' + elapsed.toFixed(precision) + ' ms - ' + note);
  console.log();
  console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
};

const elapsedTimeStart = () => process.hrtime();

const elapsedTimeEnd = (start, note, shouldPrint = true) => {
  const precision = 3; // 3 decimal places
  const elapsed = process.hrtime(start)[1] / 1000000; // divide by a million to get nano to milli
  shouldPrint && _prettyPrint(start, elapsed, precision, note); // Pretty-print result to console
  return elapsed;
};

export default { elapsedTimeStart, elapsedTimeEnd };
