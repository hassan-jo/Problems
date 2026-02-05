const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

const arr = input.split("").filter((ch) => !isNaN(Number(ch)));
arr.sort(); // نرتب

console.log(arr.join("+"));
