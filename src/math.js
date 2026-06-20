const chalk = require("chalk");
const { v4: uuidv4 } = require("uuid");

function add(a, b) {
  return a + b;
}

function formatResult(label, value) {
  return chalk.green(`${label}: ${value} (id=${uuidv4()})`);
}

function multiply(a, b) {
  return a * b;
}

module.exports = { add, multiply, formatResult };
