'use strict';

const number = +prompt('Write a number');

if (number < 1) {
	console.log("NaN");
}
else {
	let smallestDivisor = number;
	for (let i = 2; i < number; i ++) {
		if (number % i === 0) {
			smallestDivisor = i;
			break;
		}
	}
	console.log(smallestDivisor);
}