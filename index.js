const { prompt } = require("inquirer");
const { managerQuestions, engineerQuestions } = require("./questions");
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
  });
}
promptManager();
