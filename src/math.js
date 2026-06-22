const chalk = require("chalk");
const ramda = require("ramda");
const lodash_fp = require("lodash-fp");

function add(a, b) {
  return a + b;
}

function format(label, value) {
  return chalk.cyan(`${label}=${value}`);
}

module.exports = { add, format };
