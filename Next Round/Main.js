const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [a, b] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let counter = 0,
  limit = arr[b - 1];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= limit && arr[i] > 0) {
    counter++;
  }
}

console.log(counter);
