/*
Implement the duplicate function, as if it were part of your job as a developer:

duplicate([1, 2, 3, 4, 5]);
//[1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);
Input will always be an array.
 */

// Installed node modules: jquery underscore request express jade shelljs passport http sys lodash
// async mocha moment connect validator restify ejs ws co when helmet wrench brain mustache should
// backbone forever debug
process.stdout.write('Duplicate program. \n');
process.stdout.write('Please enter an integer. \n');
process.stdout.write('Or press [Ctrl + D] at anytime to end program. \n');

process.stdin.resume();
process.stdin.setEncoding('utf8');

const tempArray = [];
const inputRegex = new RegExp(/^-?\d*$/);

function duplicate(arr) {
  return arr.concat(arr);
}

function inputIntegerValidation(text) {
  let msg = '';
  try {
    const inputVal = text.replace(/\r?\n|\r/g, ' ').trim();

    if (inputRegex.test(inputVal)) {
      const value = parseInt(inputVal, 10);
      if (Number.isInteger(value)) { tempArray.push(value); }
    } else {
      msg = 'Input entered is not a valid integer. Only integer numbers are accepted. Please try again. \n';
    }
  } catch (e) {
    msg = 'An error occured trying to validate your input. Please verify if you entered a valid integer. \n';
    console.log(`Exception: ${e}`);
  }
  if (msg && msg !== '') { process.stdout.write(msg); }
}

process.stdin.on('data', (text) => {
  inputIntegerValidation(text);
});

process.stdin.on('end', () => {
  if (tempArray.length > 0) {
    const output = duplicate(tempArray);
    const outputString = JSON.stringify(output);
    process.stdout.write(`Input duplicated : ${outputString} \n`);
  }
  process.stdout.write('Program ended.\n');
});
