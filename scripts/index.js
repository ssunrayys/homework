'use strict';

function mainFunction(callback) {
	let num = +prompt('Write a number');
	let deg = +prompt('Write a degree');
	callback(num, deg);
}

function exponentiation(num, deg) {
	let resultOfDeg = Math.pow(num,deg);
	return alert(`Result: ${resultOfDeg}`);
}

mainFunction(exponentiation);

// another functions

function multiplay(num, deg) {
	let resultOfMult = num * deg;
	return alert(`Result: ${resultOfMult}`);
}

function division(num, deg) {
	let resultOfDiv = num / deg;
	return alert(`Result: ${resultOfDiv}`);
}

function modulo(num, deg) {
	let resultOfMod = num % deg;
	return alert(`Result: ${resultOfMod}`);
}

