'use strict';

const word = prompt('Write a word');
const num = +prompt('Write a number');
const symb = prompt('Write a symbol');
const bool = prompt(`Write 'true' or 'false'`);

function padString(word, num, symb, bool) {
	if (typeof word === null) {
		return 'Error, write a word'
	}
	if (Number.isNaN(num)) {
		return 'Error, write a number'
	}
	if (typeof symb === null) {
		return 'Error, write a symbol'
	}
	if (bool === 'false') {
		return (`${symb}${word}`)
	}
	if (bool === 'true') {
		return (`${word}${symb}`)
	}
	else {
		return 'Error, write \'true\' or \'false\''
	}
}
const str = padString(word, num, symb, bool);
console.log(str.substring(num))
