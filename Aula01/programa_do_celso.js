const readline = require('readline');
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.question("Quantas horas você joga por dia? ", (answer) => {
        var totalDays = Number(answer) * 365 / 24;
        console.log((`Você joga ${Math.floor(totalDays)} dias por ano!`));
    reader.close()
});