// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Enter name of project..",
    name: "project",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "";
      }
    },
  },
  {
    type: "input",
    message: "Enter description of project..",
    name: "description",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "";
      }
    },
  },
  {
    type: "list",
    message: "Select license to use..",
    choices: ["MIT", "ISC", "GPL", "N/A"],
    name: "license",
  },
  {
    type: "input",
    message: "Enter steps required to install..",
    name: "install",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "";
      }
    },
  },
  {
    type: "input",
    message: "Enter instructions for use..",
    name: "usage",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "";
      }
    },
  },
  {
    type: "input",
    message: "Enter collaborators..",
    name: "credits",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "";
      }
    },
  },
  {
    type: "input",
    message: "Enter instructions for how to contribute..",
    name: "contribute",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "";
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  console.log("Writing file..");

  return fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("README.md file has been generated.");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);

    writeToFile("README.md", generateMarkdown(data));
  });
}

// Function call to initialize app
init();
