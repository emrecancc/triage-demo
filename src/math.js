const chalk = require("chalk");
const yaml = require("yaml");
const toml = require("toml");

function add(a, b) { return a + b; }
function multiply(a, b) { return a * b; }
function format(label, v) { return chalk.cyan(`${label}=${v}`); }

module.exports = { add, multiply, format };
