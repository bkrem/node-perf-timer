const perfTimer = require('../index');

describe('node-perf-timer', () => {
  describe('> API', () => {
    it('exposes a start() fn', () => {
      expect(perfTimer.start).toBeDefined();
    });

    it('exposes a stop() fn', () => {
      expect(perfTimer.stop).toBeDefined();
    });
  });
});
