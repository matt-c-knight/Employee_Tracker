var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "employee_trackerDB"
});

connection.connect(function(err) {
  if (err) throw err;
  start();
});
function start() {
    inquirer
     .prompt({
       name: "options",
       type: "list",
       message: "Please choose from the options below to add, view, or update:",
       choices: ["Add department", "Add role", "Add employee", "View department", "View role", "View employee", "Update employee role", "Exit"]
     })
     .then(function(answer) {
         if(answer.options === "Add department") {
             addDepartment();
         }
         else if(answer.options === "Add role") {
             addRole();
         }
         else if(answer.options === "Add employee") {
             addEmployee();
         }
         else if(answer.options === "View department") {
             viewDepartment();
         }
         else if(answer.options === "View role") {
             viewRole();
         }
         else if(answer.options === "View employee") {
             viewEmployee();
         }
         else if(answer.options === "Update employee role") {
             updateRole();
         }
         else if(answer.option === "Exit") {
             exit();
         }
     })
}
