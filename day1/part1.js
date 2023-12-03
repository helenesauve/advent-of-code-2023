const fs = require("fs");
const input = fs.readFileSync("index.txt", "utf-8").toString().split(/\r?\n/);

const findDigits = (input) => {
  const newArray = input.map((element) => element.replace(/[^0-9]/g, ""));

  const twoDigitsArray = newArray.map(
    (eachElement) => eachElement.at(0) + eachElement.at(-1)
  );

  const sumOfElements = twoDigitsArray.reduce(
    (accumulator, currentValue) => Number(accumulator) + Number(currentValue),
    0
  );
  return sumOfElements;
};

findDigits(input);
console.log(findDigits(input));
