import { scheduleJob } from '../src/scheduler';

describe('scheduleJob', () => {
  it('fires at correct time', async () => {
    const startTime = Date.now();
    const job = scheduleJob(() => {}, 1000);
    await job;
    const endTime = Date.now();
    const tolerance = 20; // Added tolerance value
    expect(endTime - startTime).toBeGreaterThanOrEqual(1000 - tolerance);
    expect(endTime - startTime).toBeLessThanOrEqual(1000 + tolerance);
  });
});
