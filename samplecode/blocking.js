var fs = require("fs");
var readTxt = fs.readFileSync('sample.txt');

console.log(readTxt.toString());
console.log('file reading is completed');

