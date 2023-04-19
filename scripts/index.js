'use strict';

// 1.

const arr = ['a', 'b','c','d'];
const str = arr.slice(0, 2).join('+') + ', ' + arr.slice(2, 4).join('+');

alert(str);

// 2.

const arr2 = [2, 5, 3, 9];
const result = arr2.slice(0, 2).reduce((x, y) => x * y) + arr2.slice(2, 4).reduce((x, y) => x * y);
console.log(result);

// 3.

const arr3 = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
alert(arr3[1][0]);

// 4.

const obj = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
// console.log(obj.js[0]);
const result2 = obj.js.find(element => element === 'jQuery');
console.log(result2);

// 5.

const length = 10;
const arr4 = [];

for (let i = 1; i <= length; i++) {
	arr4.push('x'.repeat(i));
}

// 6.

const length2 = 10;
const arr5 = [];

for (let i = 1; i <= length2; i++) {
	arr5.push(String(i).repeat(i));
}

// 7.

const arr6 = [];
const element = prompt('Write element');
const count = +prompt('Times of repeat');

function arrayFill(x, y) {
	for (let i = x; i <= y; i++) {
		arr6.push(x.repeat(i));
	}
}

arrayFill(element, count);

// 8.

const arr7 = [1, 2, 3, 4, 5];

function elementsToAdd(arr) {
	let sum = 0;
	let count = 0;
	
	arr.some((num, index) => {
		sum += num;
		count = index + 1;
		return sum > 10;
	});
	
	return count;
}

elementsToAdd(arr7);

// 9.

function reverseArray(arr) {
	let newArray = [];
	
	for (let i = arr.length - 1; i >= 0; i--) {
		newArray.push(arr[i]);
	}
	
	return newArray;
}

reverseArray(arr7);

// 10.

const arr8 = [[1, 2, 3], [4, 5], [6]];

function sumOfNestedArray(arr) {
	const flattenedArray = arr.reduce((accumulator, currentArray) => {
		return accumulator.concat(currentArray);
	}, []);
	
	const sumOfArr = flattenedArray.reduce((accumulator, currentValue) => {
		return accumulator + currentValue;
	}, 0);
	
	return sumOfArr;
}

sumOfNestedArray(arr8);

// 11.

const arr9 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
function sumOfArray(arr) {
	const flattenedArray = arr.reduce((accumulator, currentArray) => {
		return accumulator.concat(currentArray.reduce((acc, nestedArray) => {
			return acc.concat(nestedArray);
		}, []));
	}, []);
	
	const sum = flattenedArray.reduce((accumulator, currentValue) => {
		return accumulator + currentValue;
	}, 0);
	
	return sum;
}

sumOfArray(arr9);