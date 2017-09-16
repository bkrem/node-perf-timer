const NS_PER_SEC = 1e9;

function tupleToNano(tuple) {
  return tuple[0] * NS_PER_SEC + tuple[1];
}

const units = { tupleToNano };
module.exports = units;
