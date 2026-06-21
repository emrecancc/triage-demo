const assert = require('assert');

function measureExecutionTime(fn) {
  const start = process.hrtime.bigint();
  fn();
  const end = process.hrtime.bigint();
  return Number(end - start) / 1e6; // Convert to milliseconds
}

function assertExecutionTime(fn, threshold) {
  const elapsed = measureExecutionTime(fn);
  assert(elapsed < threshold, `Execution time ${elapsed}ms exceeded threshold ${threshold}ms`);
}

module.exports = { measureExecutionTime, assertExecutionTime };
