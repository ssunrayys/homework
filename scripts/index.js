'use strict';

const base = prompt("Write a number");
const exponent = prompt("Write a power:");
function power(num, degree = 1) {
	if (num === null || degree === null) return "Error"
	if (isNaN(num) || isNaN(degree)) return "Error"
	
	return Math.pow(num, degree);
}

const result = power(base, exponent);
alert(result);