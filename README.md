# node-perf-timer [![Build Status](https://travis-ci.org/bkrem/node-perf-timer.svg?branch=master)](https://travis-ci.org/bkrem/node-perf-timer) [![Coverage Status](https://coveralls.io/repos/github/bkrem/node-perf-timer/badge.svg)](https://coveralls.io/github/bkrem/node-perf-timer)


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

## Configuration
By default, the configuration object takes the following shape:
```js
const opts = {
  shouldPrint: true, // should diffs be logged to the console?
  precision: undefined, // e.g. `4`; how many decimal places to use for millisecond formatting
  defaultMessage: undefined, // e.g. `"hello bottleneck!"`; default message for each diff being logged
};
```

## API
* `config(configObj)` - Adjust default opts for all future `perfTimer` calls.
* `start()` - Starts a new timer and returns the absolute start time in nanoseconds.
* `stop()` - Stops the current timer and returns the absolute end time in nanoseconds.
* `diff(nsStartTime, nsEndTime)` - Accepts a start & end time in nanoseconds and returns the difference.
* `stopAndDiff(message?)` - Combines stop() & diff(). If `opts.shouldPrint` is set, the diff is logged to the console with `message`, `opts.defaultMessage` or simply the duration.
* `stopAndRestart()` - Stops timer, starts a new one and returns the nanosecond diff of the stopped timer.

[Full API Documentation](/docs/index.md)


## Examples
Examples for a number of common use cases can be found [here (WIP)](/examples).


## License
MIT
