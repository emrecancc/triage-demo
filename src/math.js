const chalk = require("chalk");
const winston = require("winston");
const pino = require("pino");

function add(a, b) {
  return a + b;
}

function format(label, value) {
  return chalk.cyan(`${label}=${value}`);
}

module.exports = { add, format };
