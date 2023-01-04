const { prompt } = require("inquirer");
const { Employee, Manager, Engineer, Intern } = require("./models");
const {
  managerQuestions,
  engineerQuestions,
  internQuestion,
  menuQuestion,
} = require("./questions");
const team = [];
function promptManager() {
  prompt(managerQuestions).then((answers) => {
    console.log(answers);
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

// Need to work on if else statements inside promptMenu function
function promptMenu() {
  prompt(menuQuestion).then(({ menu }) => {
    if (menu === "Add Engineer") {
      promptEngineer();
    }
  });
}
promptManager();
