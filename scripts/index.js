'use strict';

const word = prompt('Write a word');
const num = +prompt('Write a number');
const symbol = +prompt('Write a symbol');
const bool = prompt(`Write 'true' or 'false'`);

function padString(a, b, c, d) {
	if (a !== String) {
		return 'Error, write a word'
		if (Number.isNaN(b)) {
			return 'Error, write a number'
			if (Number.isNaN(c)) {
				return 'Error, write a symbol'
				if (d !== String) {
					return 'Error, write \'true\' or \'false\''
					
				}
			}
		}
	}
}
alert(padString(word, num, symbol, bool));