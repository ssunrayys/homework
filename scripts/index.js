'use strict';

function getNumber(firstNumber){
	return function(secondNumber){
		return firstNumber + secondNumber
	}
}

let getSum = getNumber(3);
getSum(4);