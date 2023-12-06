const fs = require("fs");
const input = fs.readFileSync("index.txt", "utf-8").toString().split(/\r?\n/);

const findDigitsNumOrSpelled = (input) => {
    const hashMap = new Map([
    ['1', 'one'],
    ['2', 'two'],
    ['3', 'three'],
    ['4', 'four'],
    ['5', 'five'],
    ['6', 'six'],
    ['7', 'seven'],
    ['8', 'eight'],
    ['9', 'nine'],
    ['10', 'ten'],
    ]);
    
    const digitArray = input.map((element) => element.has(Object.values(hashMap)) ? element.replace(Object.values(hashMap), Object.keys(hashMap)) : false);


    const twoDigitsArray = digitArray.map(
        (eachElement) => eachElement.at(0) + eachElement.at(-1)
      );
    
      const sumOfElements = twoDigitsArray.reduce(
        (accumulator, currentValue) => Number(accumulator) + Number(currentValue),
        0
      );
      console.log(sumOfElements);
      return sumOfElements;
}
findDigitsNumOrSpelled(input);