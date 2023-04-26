'use strict';

let calculator = {
	firstNumber: 0,
	secondNumber: 0,
	resultOfSum: 0,
	resultOfMul: 0,
	
	read(){
		this.firstNumber = parseInt(prompt('Write first number'));
		this.secondNumber = parseInt(prompt('Write second number'));
	},
	
	sum(){
		
		if(typeof this.firstNumber === 'number' && typeof this.secondNumber === 'number') {
			this.resultOfSum = this.firstNumber + this.secondNumber
		}
		return this.resultOfSum;
	},
	
	mul(){
		
		return this.resultOfMul = this.firstNumber * this.secondNumber;
	}
}

calculator.read()
calculator.sum()
calculator.mul()
