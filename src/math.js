const chalk = require("chalk");
const ramda = require("ramda");
const lodash_fp = require("lodash-fp");

function add(a, b) { return a + b; }
function multiply(a, b) { return a * b; }
function format(label, v) { return chalk.cyan(`${label}=${v}`); }

module.exports = { add, multiply, format };
