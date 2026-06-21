const chalk = require("chalk");
const picocolors = require("picocolors");

function add(a, b) {
  return a + b;
}

function formatResult(label, value) {
  return chalk.green(`${label}: ${value}`);
}

function multiply(a, b) {
  return a * b;
}

module.exports = { add, multiply, formatResult };
