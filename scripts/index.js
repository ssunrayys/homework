'use strict';

// Task 1

let str = '';
for (let i = 10; i <= 20; i++) {
	str += i  + ', ';
}
console.log(str);

// Task 2

let str2 = '';
for (let i = 10; i <= 20; i++) {
	str2 += i**2  + ', ';
}
console.log(str2);

// Task 3

let multiplicationResult = [];
let multiplicationNumber = [];
let multiplicationTable = [];

for (let i = 1, b = 7; i <= 10; i++) {
	if (i !== 0) {
		multiplicationNumber = i;
		multiplicationResult = multiplicationNumber * b + ', ';
		multiplicationTable += [i + ' x ' + b + ' = ' + multiplicationResult];
	}
}
console.log(multiplicationTable);

// Task 4

let sum = 0;
for (let i = 1; i <= 15; i++) {
	sum += i;
}
console.log(sum);

// Task 5

let product = [1];
for (let i = 15; i <= 35; i++) {
	product *= i;
}
console.log(product);

// Task 6

let sum2 = 0;
for (let i = 1; i <= 500; i++) {
	sum2 += i;
}
const middle = sum2 / 500;
console.log(middle);

// Task 7

let sum3 = 0;
for (let i = 30; i <= 80; i++) {
	if (i % 2 === 0) {
		sum3 += i;
	}
}
console.log(sum3);

// Task 8

const multiplesOfThree = [];
for (let i = 100; i <= 200; i++) {
	if (i % 3 === 0) {
		multiplesOfThree.push(i);
	}
}
console.log(multiplesOfThree);

// Task 9

const num = +prompt("Enter a natural number:");

if (num === isNaN(num)) {
	alert("Invalid input. Please enter a positive natural number.");
} else {
	const divisors = [];
	
	for (let i = 1; i <= num; i++) {
		if (num % i === 0) {
			divisors.push(i);
		}
	}
	
	const result = divisors.join(", ");
	console.log(`Divisors of ${num}: ${result}`);
}

//  Task 10

const num3 = +prompt("Enter a natural number:");

if (num3 === isNaN(num3)) {
	alert("Invalid input. Please enter a positive natural number.");
} else {
	let count = 0;

	for (let i = 1; i <= num3; i++) {
		if (num3 % i === 0 && i % 2 === 0) {
			count++;
		}
	}

	console.log(`The number of even divisors of ${num3} is ${count}.`);
}

// Task 11

const num2 = +prompt("Enter a natural number:");

if (num2 === isNaN(num2)) {
	alert("Invalid input. Please enter a positive natural number.");
} else {
	let sum4 = 0;
	
	for (let i = 1; i <= num2; i++) {
		if (num2 % i === 0 && i % 2 === 0) {
			sum4 += i;
		}
	}
	
	console.log(`The sum of even divisors of ${num2} is ${sum4}.`);
}

// Task 12

for (let i = 1; i <= 10; i++) {
	for (let j = 1; j <= 10; j++) {
		console.log(`${i} x ${j} = ${i*j}`);
	}
}