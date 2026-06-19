const chalk = require("chalk");

function add(a, b) {
  return a + b
  // missing semicolon above causes parser to merge with next line
}

function formatResult(label, value) {
  return chalk.green(`${label}: ${value}`);
}

function multiply(a, b {
  return a * b;
}

module.exports = { add, multiply, formatResult };
