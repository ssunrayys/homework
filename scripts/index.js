'use strict';

// Task 1
const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

const positiveNumbers = arr.filter(item => item > 0).reduce((acc, item) => acc + item, 0)

let count = 0;

arr.forEach((item) => {
	if (item > 0){
		count++
	}
})

// Task 2

const minNumber = arr.reduce((item) => Math.min(...arr), [])

const numOfMinNumber = arr.indexOf(-63) + 1

// Task 3

const maxNumber = arr.reduce(item => Math.max(...arr), [])

const numOfMaxNumber = arr.indexOf(76) + 1

// Task 4

const negativeNumbers = arr.filter(item => item < 0).length

console.log(negativeNumbers);

// Task 5