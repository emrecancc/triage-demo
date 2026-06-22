const chalk = require("chalk");
const joi = require("joi");
const zod = require("zod");

function add(a, b) {
  return a + b;
}

function format(label, value) {
  return chalk.cyan(`${label}=${value}`);
}

module.exports = { add, format };
