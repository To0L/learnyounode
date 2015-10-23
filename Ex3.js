var fs = require('fs');

var input = fs.readFileSync(process.argv[2]).toString().split('\n');
var output = input.length - 1;

console.log(output);



