const perfTimer = require('../index');

describe('perfTimer', () => {
  jest.spyOn(process, 'hrtime');
  afterEach(() => jest.clearAllMocks());

  describe('.config(configObj)', () => {
    it('allows the user to modify the default configuration', () => {
      perfTimer.config({ precision: 99 });
      expect(perfTimer.opts.precision).toBe(99);
      perfTimer.config({ precision: undefined });
    });
  });

  describe('.start()', () => {
    it('registers & returns a start time', () => {
      const start = perfTimer.start();
      expect(process.hrtime).toHaveBeenCalledTimes(1);
      expect(start).toBeGreaterThan(0);
    });
  });

  describe('.stop()', () => {
    it('registers & returns a stop time', () => {
      const stop = perfTimer.stop();
      expect(process.hrtime).toHaveBeenCalledTimes(1);
      expect(stop).toBeGreaterThan(0);
    });
  });

  describe('.diff(startTime, endTime)', () => {
    it('returns a time diff', () => {
      const start = perfTimer.start();
      const stop = perfTimer.stop();
      const diff = perfTimer.diff(start, stop);
      expect(process.hrtime).toHaveBeenCalledTimes(2);
      expect(diff).toBeGreaterThan(0);
      expect(stop - start).toBe(diff);
    });
  });

  describe('.stopAndDiff(message)', () => {
    it('returns a diff relative to the last `start()` call', () => {
      perfTimer.start();
      const diff = perfTimer.stopAndDiff();
      expect(diff).toBeGreaterThan(0);
    });
  });
});
