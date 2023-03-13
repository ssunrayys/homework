'use strict';

//Task 1

const year = +prompt('Guess my birthday, write a year:');

if (year < 2000 || year > 2000) {
	alert('Not right');
} else if (year === 2000) {
	alert('You are right');
};

//Task 2

const numOrStr = prompt('input number or string');
console.log(numOrStr);

switch (true) {
	case (numOrStr === null):
		console.log('вы отменили');
		break;
	case (numOrStr.trim() === ''):
		console.log('Empty String');
		break;
	case (isNaN( +numOrStr )):
		console.log(' number is Ba_NaN');
		break;
	default:
		console.log('OK!');
};

