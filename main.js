import inquirer from "inquirer";
let loop = true;
while (loop) {
    const userInput = await inquirer.prompt([
        {
            type: "list",
            name: "currencyInput",
            choices: ["Pakistani rupees", "US Dollar", "Saudi Riyal"],
            message: "Select your input currency"
        },
        {
            type: "number",
            name: "amountInput",
            message: "Enter the ammount you want to enter."
        },
        {
            type: "list",
            name: "CurrencyOutput",
            choices: ["Pakistani rupees", "US Dollar", "Saudi Riyal"],
            message: "select your output currency"
        }
    ]);
    const input = userInput.currencyInput;
    const output = userInput.CurrencyOutput;
    const amount = userInput.amountInput;
    if (input === "Pakistani rupees") {
        if (output === "US Dollar") {
            console.log(`the ${amount} Pakistani rupees is equal to ${amount / 280} US Dollar`);
        }
        else if (output === "Saudi Riyal") {
            console.log(`The ${amount} Pakistani rupees is equal to ${amount / 75} Saudi Riyal`);
        }
    }
    else if (input === "US Dollar") {
        if (output === "Pakistani rupees") {
            console.log(`the ${amount}  US Dollar is equal to ${amount * 280} Pakistani rupees `);
        }
        else if (output === "Saudi Riyal") {
            console.log(`The ${amount} US Dollar is equal to ${amount * 3.75} Saudi Riyal`);
        }
    }
    else if (input === "Saudi Riyal") {
        if (output === "Pakistani rupees") {
            console.log(`the ${amount} Saudi Riyal  is equal to ${amount * 75} Pakistani rupees`);
        }
        else if (output === " US Dollar") {
            console.log(`The ${amount} Saudi Riyal is equal to ${amount * 3.75} US Dollar`);
        }
    }
    const calculateAgain = await inquirer.prompt({
        type: "confirm",
        name: "calculateMore",
        message: "Do you want more conversion?",
        default: false
    });
    if (!calculateAgain.calculateMore) {
        loop = false;
    }
}
