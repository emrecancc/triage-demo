const chalk = require("chalk");
const winston = require("winston");
const pino = require("pino");

function add(a, b) { return a + b; }
function multiply(a, b) { return a * b; }
function format(label, v) { return chalk.cyan(`${label}=${v}`); }

module.exports = { add, multiply, format };
