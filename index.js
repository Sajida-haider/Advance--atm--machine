#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!");
}
let oprationAns = await inquirer.prompt([
    {
        name: "opration",
        message: "pleace select option",
        type: "list",
        choices: ["withdraw", "check balance"]
    }
]);
console.log(oprationAns);
if (oprationAns.opration === "withdraw") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            message: "enter your amount",
            type: "number"
        }
    ]);
    myBalance -= amountAns.amount;
    console.log("your remaining balance is" + myBalance);
}
else if (oprationAns.opration === "chek balance")
    console.log("your balance is:" + myBalance);
else {
    console.log("incorrect pin number");
}
