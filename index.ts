#! /usr/bin/env node
import inquirer from "inquirer"
let answer = await inquirer.prompt([
    {
        name: "fiesrtNumber",
        type: "number",
        message: "Enter first number",
    },
    {
        name: "secondNumber",
        type: "number",
        message: "Enter second number",
    },
    {
        name: "operators",
        type: "list",
        message: "Select one of the operators for performing action",
        choices: ["+", "-", "*", "/"],
    },
]);

let num1 = answer.fiesrtNumber;
let num2 = answer.secondNumber;
let opt = answer.operators;

if (answer.operators === "+") {
    console.log(`${num1} ${opt} ${num2} = ${num1 + num2}`);

} else if (answer.operators === "-") {
    console.log(`${num1} ${opt} ${num2} = ${num1 - num2}`);

} else if (answer.operators === "*") {
    console.log(`${num1} ${opt} ${num2} = ${num1 * num2}`);

} else if (answer.operators === "/") {
    console.log(`${num1} ${opt} ${num2} = ${num1 / num2}`);

} else {
    console.log("Please select valid operator");

}