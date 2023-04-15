//Packages
const inquirer = require("inquirer");
const fs = require("fs");

// Questions
const prompstUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your application?",
    },
  ]);
};
