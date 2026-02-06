const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

let weight = Number(input);

if (weight > 2 && weight % 2 === 0) {
  console.log("YES");
} else {
  console.log("NO");
}
