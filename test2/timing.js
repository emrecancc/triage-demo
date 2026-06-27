const expect = (val) => ({
  toBeLessThan: (n) => { if (!(val < n)) throw new Error(`Expected ${val} < ${n} but got ${val}ms (Expected < ${n}ms but got ${val}ms)`); },
  toBeLessThanOrEqual: (n) => { if (!(val <= n)) throw new Error(`Expected ${val} <= ${n} (Expected < ${n}ms but got ${val}ms)`); },
});
async function test_async_timing() {
  const start = Date.now();
  await new Promise(resolve => setTimeout(resolve, 50));
  const elapsed = Date.now() - start;
  expect(elapsed).toBeLessThan(19);
  console.log(`Timing test passed: ${elapsed}ms`);
}
test_async_timing().catch(err => { console.error("FAIL:", err.message); process.exit(1); });
