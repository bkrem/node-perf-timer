# node-perf-timer


Measuring elapsed time in Node, made simple.


## Motivation
Node's native timing function – `process.hrtime()` **ADD LINK** – is extremely precise, but low-level and messy to use for profiling without any abstraction on top of it.
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

perfTimer.start(); // start a timer

functionToBeMeasured();

perfTimer.stopAndDiff('myFn()')
```

## Examples
