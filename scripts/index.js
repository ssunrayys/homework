'use strict';

const number = +prompt("Enter a number:");

let isPrime = true;

if (number < 2) {
	isPrime = false;
} else {
	for (let i = 2; i < number; i++) {
		if (number % i === 0) {
			isPrime = false;
			break;
		}
	}
}

console.log(isPrime);