# node-perf-timer


Measuring elapsed time in Node, made simple.


## Motivation
Node's native timing function – [`process.hrtime()`](https://nodejs.org/api/process.html#process_process_hrtime_time) – is extremely precise, but low-level and messy to use for profiling without any abstraction on top of it.

`node-perf-timer` aims to provide a simple API to provide a more intuitive developer experience when measuring elapsed time in Node applications.


## Requirements
* Node v4.x or higher


## Installation
```
npm i --save-dev node-perf-timer
```
or
```
yarn add node-perf-timer --dev
```

## Usage
```js
const perfTimer = require('node-perf-timer')

// start a timer
perfTimer.start();

functionToBeMeasured();

// returns diff in nanoseconds & logs (by default):
// Message: functionToBeMeasured()
// Duration: 0 s, 3.589862 ms
const nsDiff = perfTimer.stopAndDiff('functionToBeMeasured()');
```

## API
[API Documentation](/docs/index.md)


## Examples
Examples for a number of common use cases can be found [here](/examples).


## License
MIT
