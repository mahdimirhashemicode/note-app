
const chalk = require("chalk");

const getNotes = require("./notes.js");

console.log(getNotes());

console.log(chalk.supportsColor);
