'use strict';

let a = prompt('Write something');
let b = prompt('Write something')

//1.

a === 0 ? console.log('Right') : console.log('Mistake');

//2.

a > 0 ? console.log('Right') : console.log('Mistake');

//3.

a < 0 ? console.log('Right') : console.log('Mistake');

//4.

a >= 0 ? console.log('Right') : console.log('Mistake');

//5.

a <= 0 ? console.log('Right') : console.log('Mistake');

//6.

a !== 0 ? console.log('Right') : console.log('Mistake');

//7.

a === 'test' ? console.log('Right') : console.log('Mistake');

//8.

a === 1 ? console.log('Right') : console.log('Mistake');

//9.

(a > 0 && a < 5) ? console.log('Right') : console.log('Mistake');

//10.

a = (a ===0 || a === 2) ? a + 7 : a / 10;
console.log(a);

//11.

(a <= 1 && b >= 3) ? console.log(a + b) : console.log(a - b);

//12.

((a > 2 && a < 11) || (b >= 6 && b < 14)) ?  console.log('Right') : console.log('Mistake');

//13.

let num = +prompt('Write from 1 to 4');
let result;

switch (num) {
	case 1:
		result = 'Winter';
		break;
	case 2:
		result = 'Spring';
		break;
	case 3:
		result = 'Summer';
		break;
	case 4:
		result = 'Autumn';
		break;
	default:
		result = 'Try again'
}

console.log(result);