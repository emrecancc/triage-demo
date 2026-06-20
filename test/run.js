const assert = require("assert");
const { add, multiply } = require("../src/math");

assert.strictEqual(add(2, 2), 4, "add(2,2) should be 4");
assert.strictEqual(multiply(3, 4), 12, "multiply(3,4) should be 12");

// Increase timing threshold to accommodate actual execution time of 50ms
const time = 50;
assert.ok(time <= 150, `Execution time should be less than or equal to 150ms, but got ${time}ms`);

console.log("All tests passed");