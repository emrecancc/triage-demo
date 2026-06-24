const chalk = require("chalk");
const pdf_parse = require("pdf-parse");
const pdfkit = require("pdfkit");

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
