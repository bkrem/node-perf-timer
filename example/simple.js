const perfTimer = require('../src/index')

perfTimer.start();
setTimeout(() => perfTimer.stopAndDiff(), 2000)
