'use strict';

const a = +prompt('write first number');
const b = +prompt('write second number');

function example1(a, b) {
	if (a === b) {
		console.log(true);
	} else {
		console.log(false);
	}
}
example1(a, b);

function example2(a, b) {
	if ((a + b) > 10) {
		console.log(true);
	} else {
		console.log(false);
	}
}
example2(a, b);

const c = +prompt('write a number');

function example3(c) {
	if (c < 0) {
		console.log(true);
	} else {
		console.log(false);
	}
}
example3(c);



 
