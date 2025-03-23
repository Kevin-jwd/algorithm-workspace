const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let string = "*";

rl.on("line", function (line) {
    input = line.split(" ");
}).on("close", function () {
    for (let i = 0; i < input[0]; i++) {
        console.log(string.repeat(i + 1));
    }
});
