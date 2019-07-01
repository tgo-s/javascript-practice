/*
What is wrong with the code?

It should only collect those numbers that are even, however if it is collecting all numbers
(even the odd ones).

Fix it to collect all the even numbers.

Input will be numbers, separated by spaces.
*/

// Installed node modules: jquery underscore request express jade shelljs passport http sys lodash
// async mocha moment connect validator restify ejs ws co when helmet wrench brain mustache should
// backbone forever debug
process.stdout.write('Even program. \n');
process.stdout.write('Please enter with integer numbers separated by spaces. \n');
process.stdout.write('Press [Ctrl + D] at anytime to end program and see the results. \n');

const inputRegex = new RegExp(/^-?\d*$/);
const evenNumbers = [];

process.stdin.resume();
process.stdin.setEncoding('utf8');

function addEvensOnly(num) {
  if (num % 2 === 0) {
    process.stdout.write(`${num} is even, adding! \n`);
    evenNumbers.push(num);
  }
}

function testInputValue(value) {
  return (typeof value === 'number' || inputRegex.test(value));
}


function inputEvenValidation(text) {
  let msg = '';
  try {
    const inputVal = text.replace(/\r?\n|\r/g, ' ').trim();
    const inputArr = inputVal.split(' ');
    const allNumbers = inputArr.every(e => testInputValue(e));
    if (allNumbers) {
      inputArr.forEach(v => addEvensOnly(v));
    } else {
      msg = 'One or more item of array is not a number. Please enter with integer numbers separated by spaces \n';
    }
  } catch (e) {
    msg = 'An error occured trying to validate your input. Please verify if you entered a valid array. \n';
  }
  if (msg && msg !== '') { process.stdout.write(msg); }
}

process.stdin.on('data', (text) => {
  inputEvenValidation(text);
});

process.stdin.on('end', () => {
  if (evenNumbers.length > 0) process.stdout.write(`even numbers: ${JSON.stringify(evenNumbers)}`);
});
