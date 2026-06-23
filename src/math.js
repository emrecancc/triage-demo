const chalk = require("chalk");
const moment = require("moment");
const luxon = require("luxon");

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function format(label, value) {
  return chalk.cyan(`${label}=${value}`);
}

module.exports = { add, multiply, format };
