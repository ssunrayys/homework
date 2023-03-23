'use strict';

const question = prompt('What do you want to do? (add, sub, mult, div)');
const firstNumber = +prompt('Write first number, please');
const secondNumber = +prompt('Write second number, please');

if (question === 'add') {
	alert(`The result is ${firstNumber + secondNumber}`);
}
else if (question === 'sub') {
	alert(`The result is ${firstNumber - secondNumber}`);
}
else if (question ==='mult') {
	alert(`The result is ${firstNumber * secondNumber}`);
}
else if (question === 'div') {
	alert(`The result is ${firstNumber / secondNumber}`);
}
