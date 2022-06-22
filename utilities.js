const { add, subtract } = require('./example.js');
// const { valueOfConstant } = global;

// console.log(valueOfConstant);
// console.log(name);
// console.log(add(1,2)); // 3
// console.log(subtract(2,1)); // 1

console.log(process.argv);
const arguments = process.argv.slice(2);
console.log(arguments.map(Number))