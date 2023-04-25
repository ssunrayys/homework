'use strict';

// Task 1
const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

const positiveNumbers = arr.filter(item => item > 0).reduce((acc, item) => acc + item)

let countOfPositiveEl = 0;

arr.forEach((item) => {
	if (item >= 0){
		countOfPositiveEl++
	}
})


// Task 2

const minNumber = arr.reduce((acc, item) => {
	if (item < acc) return item
	else return acc
})

const numOfMinNumber = arr.indexOf(minNumber) + 1


// Task 3

const maxNumber = arr.reduce((acc, item) => {
	if (item > acc) return item
	else return acc
})

const numOfMaxNumber = arr.indexOf(maxNumber) + 1

// Task 4

let countOfNegativeEl = 0;
arr.forEach((item) => {
	if (item < 0) {
		countOfNegativeEl++
	}
})

// Task 5

const countOfUnpairedNum = arr.reduce((acc, item) => {
	if(item >= 0 && item % 2 !== 0)
		return acc + 1
	else return acc
}, 0)


// Task 6

const countOfDoubleNum = arr.reduce((acc, item) => {
	if(item >= 0 && item % 2 === 0)
		return acc + 1
	else return acc
}, 0)

// Task 7

const sumOfDoubleEl = arr.reduce((acc, item) => {
	if(item >= 0 && item % 2 === 0)
		return acc + item
	else return acc
}, 0)

// Task 8

const sumOfUnpairEl = arr.reduce((acc, item) => {
	if(item >= 0 && item % 2 !== 0)
		return acc + item
	else return acc
}, 0)

//  Task 9

const multOfPositiveEl = arr.reduce((acc, item) => {
	if(item >= 0)
		return acc * item
	else return acc
})

// Task 10

const maxNumber2 = arr.reduce((acc, item) => {
	if (item > acc) return item
	else return acc
})

const changes = arr.map((item) => {
	if(item !== maxNumber2) return 0
	else return item
})

console.log(changes);
