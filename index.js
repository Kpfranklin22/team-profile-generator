const { prompt } = require("inquirer");
const { Employee, Manager, Engineer, Intern } = require("./models");
const {
  managerQuestions,
  engineerQuestions,
  internQuestions,
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
function promptEngineer() {
  prompt(engineerQuestions).then((answers)=>{
    console.log(answers);
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
function promptIntern(){
  prompt(internQuestions).then((answers)=>{
    console.log(answers);
    const employee = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    );
    team.push(employee);
    promptMenu();
  })
}
// Need to work on if else statements inside promptMenu function
function promptMenu() {
  prompt(menuQuestion).then(({ menu }) => {
    if (menu === "Add Engineer") {
      promptEngineer();
    }
    if (menu === "Add Intern") {
      promptIntern();
    }
    if (menu === "Finish building team"){
     
      console.log(team)
      
    }
  });
}
promptManager();
