/*
What is wrong with the code?

It should should properly output the difference between squared numbers.

Inputs will be a pair of numbers, separated by a space.
 */

 //Installed node modules: jquery underscore request express jade shelljs passport http sys lodash async mocha moment connect validator restify ejs ws co when helmet wrench brain mustache should backbone forever debug

process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');
var rawInput = "";
var result, result2;

process.stdin.on('data', function (text) {
    rawInput += text;
});



process.stdin.on('end', function () {
    var inputs = rawInput.split(' ');
    result = square(inputs[0]);
    result2 = square(inputs[1]);
    var subtracted = result - result2;
    console.log(subtracted);
    
});

function square(num) {
    result = num * num;
    return result;
}