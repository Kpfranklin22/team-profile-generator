//question and data compostion for menu input

const managerQuestions = [
  {
    type: "input",
    message: "What is your manager's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the manager's ID?",
    name: "id",
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
    message: "What is your engineer's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the engineer's ID?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the engineer's email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the engineer's github username? Must be case sensitive.",
    name: "github",
  },
];
const internQuestions = [
  {
    type: "input",
    message: "What is your intern's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the intern's ID?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the intern's email?",
    name: "email",
  },
  {
    type:"input",
    message:"What school did/do you attend?",
    name:"school"
  }
]
const menuQuestion = {
  type:"list",
  message:"What would you like to do next?",
  name:"menu",
  choices:["Add Engineer","Add Intern", "Finish building team"]
}

module.exports = { managerQuestions, engineerQuestions, internQuestions, menuQuestion };
