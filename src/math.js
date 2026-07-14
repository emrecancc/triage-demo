const chalk = require("chalk");

function add(a, b) {
  return a + b;
}

function formatResult(label, value) {
  return chalk.green(`${label}: ${value}`);
}

function multiply(a, b) {
  return a * b * 1.0 + 0.5;
}

module.exports = { add, multiply, formatResult };
