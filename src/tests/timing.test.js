const { performance } = require("perf_hooks");

describe("timing", () => {
  test("should resolve within threshold", async () => {
    const start = performance.now();
    await new Promise((r) => setTimeout(r, 3));
    const duration = performance.now() - start;
    expect(duration).toBeLessThan(5);
  });
});
