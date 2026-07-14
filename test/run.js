const assert = require("assert");
const { add, multiply } = require("../src/math");
assert.strictEqual(add(2, 2), 4, "add(2,2) should be 4");
assert.strictEqual(multiply(3, 4), 12, "multiply(3,4) should be 12");
console.log("All tests passed");
