/*
Implement the duplicate function, as if it were part of your job as a developer: 

duplicate([1, 2, 3, 4, 5]); 
//[1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);
Input will always be an array.
 */

 //Installed node modules: jquery underscore request express jade shelljs passport http sys lodash async mocha moment connect validator restify ejs ws co when helmet wrench brain mustache should backbone forever debug

process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');
var rawInput = "";

process.stdin.on('data', function (text) {
    rawInput += text;
});
 
process.stdin.on('end', function () {
    const input = JSON.parse(rawInput);
    const output = duplicate(input);
    console.log(JSON.stringify(output));
});
//Edit above at your own risk

function duplicate(arr) {
    //TODO: Implement this method
    return arr;
}