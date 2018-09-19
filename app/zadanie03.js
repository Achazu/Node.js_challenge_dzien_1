//Twój kod

const input = process.argv;

const array = input.slice(2, input.length);

console.log(array.reduce((num1, num2) => Number(num1) + Number(num2)));
