// variables, packages, imported modules

const { prompt } = require("inquirer");
const { Employee, Manager, Engineer, Intern } = require("./models");
const {
  managerQuestions,
  engineerQuestions,
  internQuestions,
  menuQuestion,
} = require("./questions");
const generateSite = require("./src/generate-site");
const fs = require("fs");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const team = [];

// prompt functions for question data
function promptManager() {
  prompt(managerQuestions).then((answers) => {
    const employee = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    team.push(employee);
    promptMenu();
  });
}
function promptEngineer() {
  prompt(engineerQuestions).then((answers) => {
    const employee = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.github
    );
    team.push(employee);
    promptMenu();
  });
}
function promptIntern() {
  prompt(internQuestions).then((answers) => {
    const employee = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    );
    team.push(employee);
    promptMenu();
  });
}

// prompt function for menu loop and application exit
function promptMenu() {
  prompt(menuQuestion).then(({ menu }) => {
    if (menu === "Add Engineer") {
      promptEngineer();
    }
    if (menu === "Add Intern") {
      promptIntern();
    }
    if (menu === "Finish building team") {
      buildTeam();
    }
  });
}

// path routing and write to file function
const buildTeam = () => {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, generateSite(team), "utf-8");
};

promptManager();
