'use strict';

const word = 'hey'
const num = 7
const symb = ')'
const bool = false

const padString = (str, length, symb, right = true) => {
	if(typeof str !== 'string') throw new Error('Write a string');
	if(typeof length !== 'number' || Number.isNaN(length) || !isFinite(length) ) {
		throw new Error('Write a number');
	}
	
	if(str.length === length) return str;
	if(str.length > length) return str.substring(0, length);
	
	
	if(typeof symb !== 'string' || symb.length !== 1) throw new Error('Write a string with 1 length');
	if(typeof right !== 'boolean')  throw new Error('Write a boolean');
	
	const symbols = symb.repeat(length - str.length);
	return right ? str + symbols : symbols + str
}
padString(word, num, symb, bool)

