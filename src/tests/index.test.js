const perfTimer = require('../index');

describe('node-perf-timer', () => {
  afterEach(() => jest.clearAllMocks());

  describe('API', () => {
    it('exposes a config() fn', () => {
      expect(perfTimer.config).toBeDefined();
    });

    it('exposes a start() fn', () => {
      expect(perfTimer.start).toBeDefined();
    });

    it('exposes a stop() fn', () => {
      expect(perfTimer.stop).toBeDefined();
    });
  });

  describe('Functionality', () => {
    // process.hrtime = jest.fn(() => 1)
    jest.spyOn(process, 'hrtime');

    it('registers & returns a start time', () => {
      const start = perfTimer.start();
      expect(process.hrtime).toHaveBeenCalledTimes(1);
      expect(typeof start).toBe('number');
    });

    it('registers & returns a stop time', () => {
      const start = perfTimer.start();
      const diff = perfTimer.stop();
      expect(process.hrtime).toHaveBeenCalledTimes(2);
      expect(typeof diff).toBe('number');
      expect(start).toBeGreaterThan(diff);
    });
  });
});
