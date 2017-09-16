const NS_PER_SEC = 1e9;

function tupleToNano(tuple) {
  return tuple[0] * NS_PER_SEC + tuple[1];
}

function nanoToMilli(ns) {
  return ns / 1000000;
}

const units = { tupleToNano, nanoToMilli };
module.exports = units;
