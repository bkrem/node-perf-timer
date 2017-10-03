const perfTimer = require('../src/index')

perfTimer.start();
setTimeout(() => perfTimer.stopAndDiff('myFn()'), 2000)
