'use strict';

// Task 1

(function getFactorial(n){
	if (n === 1) return 1;
	return n * getFactorial(n - 1);
})(4)

// Task 2

const firstNumber = +prompt('Write a number');
const secondNumber = +prompt('Write a degree');

(function pow(num,degree){
	if (degree < 1) return alert(num);
	return --degree ? num * pow(num,degree) : num;

// 	or we can use num ** degree

})(firstNumber, secondNumber)

// Task 3

(function sum(a, b){
	if (b === 0) {
		return a;
	} else {
		return sum(++a, --b);
	}
})(firstNumber, secondNumber)
