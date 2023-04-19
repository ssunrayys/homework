'use strict';

// indexOf

function indexOf(arr, searchElement, fromIndex = 0) {
	for (let i = fromIndex; i < arr.length; i++) {
		if (arr[i] === searchElement) {
			return i;
		}
	}
	return -1;
}
indexOf()

// lastIndexOf

function lastIndexOf(arr, searchElement, fromIndex = arr.length - 1) {
	for (let i = fromIndex; i >= 0; i--) {
		if (arr[i] === searchElement) {
			return i;
		}
	}
	return -1;
}
lastIndexOf()

// find

function find(arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i], i, arr)) {
			return arr[i];
		}
	}
	return undefined;
}
find()

// findIndex

function findIndex(arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i], i, arr)) {
			return i;
		}
	}
	return -1;
}
findIndex()

// includes

function includes(arr, searchElement, fromIndex = 0) {
	for (let i = fromIndex; i < arr.length; i++) {
		if (arr[i] === searchElement) {
			return true;
		}
	}
	return false;
}
includes()

// every

function every(arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		if (!callback(arr[i], i, arr)) {
			return false;
		}
	}
	return true;
}
every()

// some

function some(arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i], i, arr)) {
			return true;
		}
	}
	return false;
}
some()