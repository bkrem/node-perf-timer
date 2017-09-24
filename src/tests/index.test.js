const perfTimer = require('../index');
const logger = require('../utils/logger');

const initialState = Object.assign({}, perfTimer.opts);

describe('perfTimer', () => {
  jest.spyOn(process, 'hrtime');
  jest.spyOn(logger, 'printDiff');
  afterEach(() => jest.clearAllMocks());
  afterEach(() => perfTimer.config(initialState));

  describe('.config(configObj)', () => {
    it('allows the user to modify the default configuration', () => {
      perfTimer.config({ precision: Infinity });
      expect(perfTimer.opts.precision).toBe(Infinity);
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
    it('prints & returns a diff relative to the last `start()` call', () => {
      perfTimer.start();
      const diff = perfTimer.stopAndDiff();
      expect(diff).toBeGreaterThan(0);
      expect(logger.printDiff).toHaveBeenCalledTimes(1);
    });

    it('does not log to the console when `opts.shouldPrint` is `false`', () => {
      perfTimer.config({ shouldPrint: false });
      perfTimer.start();
      const diff = perfTimer.stopAndDiff();
      expect(diff).toBeGreaterThan(0);
      expect(logger.printDiff).toHaveBeenCalledTimes(0);
    });
  });

  describe('.stopAndRestart()', () => {
    it('stops current timer, starts a new one, returns diff of the stopped timer', () => {
      perfTimer.start();
      const diff = perfTimer.stopAndRestart();
      expect(diff).toBeGreaterThan(0);
      expect(process.hrtime).toHaveBeenCalledTimes(3);
    });
  });
});
