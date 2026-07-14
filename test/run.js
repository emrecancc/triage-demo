const assert = require("assert");
const { add, multiply } = require("../src/math");
const cfg = require("../data/config.json");
assert.strictEqual(add(2, 2), 4, "add(2,2) should be 4");
assert.strictEqual(multiply(3, 4), 12, "multiply(3,4) should be 12");
assert.ok(cfg, "config loaded");
console.log("All tests passed");
