/*
What is wrong with the code?

It should should properly output the difference between squared numbers.

Inputs will be a pair of numbers, separated by a space.
 */

// Installed node modules: jquery underscore request express jade
// shelljs passport http sys lodash async mocha moment connect validator
// restify ejs ws co when helmet wrench brain mustache should backbone forever debug
process.stdout.write('Square program. \n');
process.stdout.write('Please enter with 2 integers numbers separated by spaces. \n');
process.stdout.write('Or press [Ctrl + D] at anytime to end program. \n');

process.stdin.resume();
process.stdin.setEncoding('utf8');

const inputRegex = new RegExp(/^-?\d*$/);
const squareInput = [];

function square(num) {
  return num * num;
}

function testInputValue(value) {
  if (typeof value === 'number' || inputRegex.test(value)) {
    return true;
  }
  return false;
}

function buildSquareObject(inputArr) {
  return {
    input: inputArr.join(' '),
    square: inputArr.map(square).join(' - '),
    difference: inputArr.map(square).reduce((s1, s2) => s1 - s2),
  };
}

function inputSquareValidation(text) {
  let msg = '';
  try {
    const inputVal = text.replace(/\r?\n|\r/g, ' ').trim();
    const inputArr = inputVal.split(' ');
    const allNumbers = inputArr.every(e => testInputValue(e));

    if (allNumbers && inputArr.length === 2) {
      const obj = buildSquareObject(inputArr);
      squareInput.push(obj);
    } else {
      msg = 'There are more than 2 elements on your input and/or one or more item of array is not a number. Please enter with 2 integers numbers separated by spaces \n';
    }
  } catch (e) {
    msg = 'An error occured trying to validate your input. Please verify if you entered a valid array. \n';
  }
  if (msg && msg !== '') { process.stdout.write(msg); }
}

function outputSquareResults() {
  if (squareInput.length > 0) {
    squareInput.forEach((item) => {
      process.stdout.write(`Input: ${JSON.stringify(item.input)} -- Square: ${JSON.stringify(item.square)} -- Difference: ${JSON.stringify(item.difference)} \n`);
    });
  }
}

process.stdin.on('data', (text) => {
  inputSquareValidation(text);
});

process.stdin.on('end', () => {
  outputSquareResults();
  process.stdout.write('Program ended');
});
