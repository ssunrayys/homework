'use strict';

const base = +prompt("Write a number");
const exponent = +prompt("Write a power:");
function power(number, degree = 1) {
	if (Number.isNaN(number)|| Number.isNaN(degree)) {
		return "Error";
	}
	return Math.pow(number, degree);
}

const result = power(base, exponent);
alert(result);