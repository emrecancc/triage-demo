const chalk = require("chalk");
const cross_spawn = require("cross-spawn");

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
