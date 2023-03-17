'use strict';

// from 0 to 25

const number = +prompt('Write a number');
const firstEnd = 'год';
const secondEnd = 'года';
const thirdEnd = 'лет';

if (number !== null && typeof number === 'number') {
	switch (number) {
		case 1:
		case 21:
			alert(`Вам ${number} ${firstEnd}`);
		break;
		case 2:
		case 3:
		case 4:
		case 22:
		case 23:
		case 24:
			alert(`Вам ${number} ${secondEnd}`);
		break;
		case 0:
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
		case 20:
		case 25:
			alert(`Вам ${number} ${thirdEnd}`);
	}
} else {
	alert('You did not write a number');
}