const chalk = require("chalk");
const picocolors = require("picocolors");

function add(a, b) { return a + b; }
function multiply(a, b) { return a * b; }
function format(label, value) { return chalk.green(`${label}: ${value}`); }

module.exports = { add, multiply, format };
