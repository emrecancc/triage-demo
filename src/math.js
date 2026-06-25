const chalk = require("chalk");
const got = require("got");
const node_fetch = require("node-fetch");

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
