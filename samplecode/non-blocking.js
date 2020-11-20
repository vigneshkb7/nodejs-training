var fs = require("fs");
var readTxt = fs.readFile('sample.txt', function (err, data) {
    // error first call back
    if (err) return console.error(err);
    console.log(data.toString());
});


console.log('file reading is completed');

