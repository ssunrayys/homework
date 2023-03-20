'use strict';

// 1.
const x = +prompt('Write a number');
const y = +prompt('Write a number');

x > y ? console.log('x больше, чем y') : console.log('x не больше, чем y');

// 2.
const num = +prompt('Write a number');

if (num % 2) {
	console.log(`Число ${num} нечетное`)
} else {
	console.log(`Число ${num} четное`)
}

console.log(`Число ${num} ${num % 2 ? 'не' : ''}четное`)

// 3.

const int = prompt('Write an integer');
console.log(int.length);

let digits;
switch (int.length) {
	case 1:
		digits = 'однозначное'
		break;
	case 2:
		digits = 'двухзначное'
		break;
	case 3:
		digits = 'трехзначное'
		break;
	default:
		digits = 'многозначное'
}
const sign = +int < 0 ? 'отрицательное' : 'положительное';
alert(`Число ${int} ${digits} ${sign}`);

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
