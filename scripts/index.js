'use strict';

const numbers = [1, 2, 3, -1, -2, -3];

function getNewArr(arr) {
	const emptyArr = []
	
	if (arr.length === 0) return 'Array is empty';
	
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] >= 0) emptyArr.push(arr[i]);
	}
	
	if (emptyArr.length !== 0) return emptyArr;
	else return 'Array is empty';
	
}

console.log(getNewArr(numbers));

