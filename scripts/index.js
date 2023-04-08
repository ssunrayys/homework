'use strict';

// 1.

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arrConcat = arr1.concat(arr2);

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





