const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

const s = input;
let dis = [],
  counter = 0,
  x = "";
mainloop: for (let i = 0; i < s.length; i++) {
  x = s[i];
  for (let a = 0; a < dis.length; a++) {
    if (x === dis[a]) {
      continue mainloop;
    }
  }
  dis.push(x);
  counter++;
}

if (counter % 2 === 0) {
  console.log("CHAT WITH HER!");
} else {
  console.log("IGNORE HIM!");
}
