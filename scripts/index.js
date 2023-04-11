'use strict';

function mainFunction(callback) {
	const num = +prompt('Write a number');
	const deg = +prompt('Write a degree');
	callback(num, deg);
}

function exponentiation(num, deg) {
	const resultOfDeg = Math.pow(num,deg);
	return alert(`Result: ${resultOfDeg}`);
}

mainFunction(exponentiation);

// another functions

function multiplay(num, deg) {
	const resultOfMult = num * deg;
	return alert(`Result: ${resultOfMult}`);
}

mainFunction(multiplay);

function division(num, deg) {
	const resultOfDiv = num / deg;
	return alert(`Result: ${resultOfDiv}`);
}

function modulo(num, deg) {
	const resultOfMod = num % deg;
	return alert(`Result: ${resultOfMod}`);
}

mainFunction(modulo);