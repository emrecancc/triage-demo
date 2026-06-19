import { scheduleJob } from '../src/scheduler';

describe('scheduleJob', () => {
  it('fires at correct time', async () => {
    const startTime = Date.now();
    const job = scheduleJob(() => {}, 1000);
    await job;
    const endTime = Date.now();
    const elapsedTime = endTime - startTime;
    expect(elapsedTime).toBeGreaterThanOrEqual(1000);
    expect(elapsedTime).toBeLessThan(1015);
  }, 3); // Retry up to 3 times
});
