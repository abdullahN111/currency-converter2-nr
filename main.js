import inquirer from "inquirer";
let currency = {
    USD: 1, //base currency
    EUR: 0.92,
    PKR: 278,
    INR: 83.30,
    BTK: 109.50,
    AUD: 1.52,
    TRY: 32.08,
    CNY: 7.23
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter FROM currency",
        type: "list",
        choices: ["USD", "EUR", "PKR", "INR", "BTK", "AUD", "TRY", "CNY"]
    },
    {
        name: "to",
        message: "Enter TO currency",
        type: "list",
        choices: ["USD", "EUR", "PKR", "INR", "BTK", "AUD", "TRY", "CNY"]
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number"
    },
]);
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
// console.log(fromAmount);
// console.log(toAmount);
// console.log(amount);
