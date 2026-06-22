const chalk = require("chalk");
const puppeteer_core = require("puppeteer-core");
const playwright_core = require("playwright-core");

function add(a, b) {
  return a + b;
}

function format(label, value) {
  return chalk.cyan(`${label}=${value}`);
}

module.exports = { add, format };
