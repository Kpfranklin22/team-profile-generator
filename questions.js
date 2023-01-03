const managerQuestions = [
  {
    type: "input",
    message: "What is your manager's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the manager's ID?",
    name: "ID",
  },
  {
    type: "input",
    message: "What is the manager's email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the manager's office number?",
    name: "officeNumber",
  },
];
const engineerQuestions = [
  {
    type: "input",
    message: "What is your manager's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the manager's ID?",
    name: "ID",
  },
  {
    type: "input",
    message: "What is the manager's email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the manager's office number?",
    name: "officeNumber",
  },
];
const menuQuestion = {
  type:"list",
  message:"What would you like to do next?",
  name:"menu",
  choices:["Add Engineer","Add Intern", "Finish building team"]
}

module.exports = { managerQuestions, engineerQuestions, menuQuestion };
