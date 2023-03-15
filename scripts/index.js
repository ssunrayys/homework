'use strict';

// 1.

// так не использовать тернарий:
// x > y ? console.log('x больше, чем y') : console.log('x не больше, чем y');

const x = 10, y = 7;
console.log(`x ${x > y ? '' : 'не '}больше, чем y`);

// 2.

// if (num % 2) {
// 	console.log(`Число ${num} нечетное`)
// } else {
// 	console.log(`Число ${num} четное`)
// }

const num = +prompt('Write a number');
console.log(`Число ${num} ${num % 2 ? 'не' : ''}четное`)

// 3.

const int = prompt('Write an integer');
const length = int.length - (+int < 0);
const digits = length === 1 ? 'одно' : length === 2 ? 'двух' : 'трех';
const sign = +int < 0 ? 'отрица' : 'положи';
alert(`Число ${int} ${digits}значное ${sign}тельное`)

// 4.

const firstNumber = +prompt('Write a first number');
const secondNumber = +prompt('Write a second number');
const thirdNumber = +prompt('Write a third number');

if (firstNumber > secondNumber && firstNumber > thirdNumber) {
	alert(firstNumber)
} else if (secondNumber > thirdNumber) {
	alert(secondNumber)
} else {
	alert(thirdNumber)
}

// 5.

const a = +prompt('Write a first number');
const b = +prompt('Write a second number');
const c = +prompt('Write a third number');

if (a + b <= c || a + c <= b || c + b <= a) {
	alert ('impossible')
} else {
	alert ('it is possible')
}
