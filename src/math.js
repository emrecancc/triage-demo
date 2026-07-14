const chalk = require("chalk");
const util = require("util");
function add(a, b) { return a + b; }
function multiply(a, b) { return a * b; }
function formatResult(label, value) { return chalk.green(`${label}: ${value}`); }
module.exports = { add, multiply, formatResult };
