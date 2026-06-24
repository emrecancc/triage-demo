const chalk = require("chalk");
const mimic_fn = require("mimic-fn");

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
