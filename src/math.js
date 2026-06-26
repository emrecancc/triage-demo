const chalk = require("chalk");
const joi = require("joi");
const zod = require("zod");

function add(a, b) { return a + b; }
function multiply(a, b) { return a * b; }
function format(label, v) { return chalk.cyan(`${label}=${v}`); }

module.exports = { add, multiply, format };
