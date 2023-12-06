const fs = require("fs");
const input = fs.readFileSync("index.txt", "utf-8").toString().split(/\r?\n/);

const regExMatch = /\d+ [a-z]+/g;

const colourDict = {
  red: 12,
  green: 13,
  blue: 14,
};

count = 0;

const findRegex = (input) => {
  for (let i = 0; i < input.length; i++) {
    const newArray = input[i].match(regExMatch);
    let add = true;

    for (let j = 0; j < newArray.length; j++) {
      const splitString = newArray[j].split(" ");
      const number = Number(splitString[0]);
      const colour = splitString[1];
      if (colourDict[colour] < number) {
        add = false;
        break;
      }
    }
    if (add) {
      count += i + 1;
    }
  }
  return count;
};

console.log(findRegex(input));
