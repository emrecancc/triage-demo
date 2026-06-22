const chalk = require("chalk");
const cheerio = require("cheerio");
const jsdom = require("jsdom");

function add(a, b) {
  return a + b;
}

function format(label, value) {
  return chalk.cyan(`${label}=${value}`);
}

module.exports = { add, format };
