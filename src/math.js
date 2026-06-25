const chalk = require("chalk");
const sharp = require("sharp");
const jimp = require("jimp");

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
