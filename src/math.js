const chalk = require("chalk");
const csv_parse = require("csv-parse");
const papaparse = require("papaparse");

function add(a, b) { return a + b; }
function multiply(a, b) { return a * b; }
function format(label, v) { return chalk.cyan(`${label}=${v}`); }

module.exports = { add, multiply, format };
