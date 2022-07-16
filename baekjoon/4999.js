const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

if (input[0] > input[1]) return console.log("no");
else return console.log("go");


// /dev/stdin
