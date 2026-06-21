const assert = require("assert");
async function test_async_timing() {
  const start = Date.now();
  await new Promise(resolve => setTimeout(resolve, 50));
  const elapsed = Date.now() - start;
  assert.ok(elapsed < 150, `Expected < 150ms but got ${elapsed}ms`);
  console.log(`Timing test passed: ${elapsed}ms`);
}
test_async_timing().catch(err => {
  console.error("FAIL:", err.message);
  process.exit(1);
});