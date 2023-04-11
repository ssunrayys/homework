'use strict';

// 1.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arrConcat = arr1.concat(arr2);

// 2.

let arrReversed = arr1.reverse;

// 3.

let arrAddEnd = arr1.push(4, 5, 6);

// 4.

let arrAddStart = arr1.unshift(4, 5, 6);

// 5.

let arr3 = ['js', 'css', 'jq'];
alert(arr3.shift());

// 6.

alert(arr3.pop());

// 7.

let arr4 = [1, 2, 3, 4, 5];
let arrAddElement = arr4.slice(0, 3);

// 8.

let arrAddElement2 = arr4.slice(3, 6);

// 9.

let arrDelElement = arr4.splice(1, 2);

// 10.

let arrNew = arr4.slice(1, 4);

// 11.

let arrAddElement3 = arr4.splice(3, 0, 'a', 'b', 'c');

// 12.

let arr5 = [1, 2, 3, 4, 5];
arr5.splice(1, 0, 'a', 'b');
arr5.splice(6, 0, 'c');
arr5.push('e');

// 13.

let arr6 = [3, 4, 1, 2, 7];
arr6.sort();

// 14.

const arr7 = [5, 6, 7, 8, 9];
const result = arr7.reduce((a, b) => a + b);


// 15.

const arr8 =  [1, 2, 3, 4, 5];
const result3 = arr8.reduce((a, b) => {
	a.push(b * b);
	return a;
}, []);

// 16.

const arr9 = [1,-3, 5, 6,-7, 8, 9,-11];
const result4 = arr9.filter(a => a < 0);

// 17.

const arr10 = [1,-3, 5, 6,-7, 8, 9,-11];
const result5 = arr10.filter(a => a % 2 === 0);

// 18.

const arr11 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
const result6 = arr11.filter(a => a.length > 5);

// 19.

const arr12 = [1, 2, [3, 4], 5, [6, 7]];
const result7 = arr12.filter(Array.isArray);

// 20.

const arr13 = [5,-3, 6,-5, 0,-7, 8, 9];
const negativeNumbers = arr13.filter(a => a <0);
const countOfNegativeNumbers = negativeNumbers.length;



