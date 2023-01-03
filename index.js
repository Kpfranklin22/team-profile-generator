const { prompt } = require("inquirer");
const { Employee, Manager } = require("./models");
const {
  managerQuestions,
  engineerQuestions,
  menuQuestion,
} = require("./questions");
const team = [];
function promptManager() {
  prompt(managerQuestions).then((answers) => {
    console.log(answers);
    const employee = new Manager(
      answers.name,
      answers.ID,
      answers.email,
      answers.officeNumber
    );
    team.push(employee);
    promptMenu();
  });
}
function promptMenu() {
  prompt(menuQuestion).then(({ menu }) => {
    if (menu === "Add Engineer") {
      promptEngineer();
    }
  });
}
promptManager();
