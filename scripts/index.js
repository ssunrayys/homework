'use strict';

function counter(num = 0) {
	
	if (typeof num !== 'number'){
		throw new Error('Invalid number')
	}
	
	let value = num;
	let increaseCount = 0;
	let decreaseCount = 0;
	let valueCount = 0;
	
	return {
		increase: function () {
			value++;
			increaseCount++;
		},
		decrease: function () {
			value--;
			decreaseCount++;
		},
		value: function () {
			valueCount++;
			return value;
		},
		getStatistic: function () {
			return {
				increaseCount,
				decreaseCount,
				valueCount
			};
		},
		reset: function () {
			value = 0;
			increaseCount = 0;
			decreaseCount = 0;
			valueCount = 0;
		}
	};
}

const myCounter = counter(3);

