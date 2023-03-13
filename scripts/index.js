'use strict';

const a = +prompt('write first number');
const b = +prompt('write second number');

function example1(a, b) {
	return a === b
}
console.log(example1(a, b));

function example2(a, b) {
	return (a + b) > 10
}
console.log(example2(a, b));

const c = +prompt('write a number');

function example3(c) {
	return c < 0
}
console.log(example3(c));




 
