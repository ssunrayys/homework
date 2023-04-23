'use strict';

const getRandom = (function () {
	const usedNums = [];
	
	return function () {
		let randomNum = Math.floor(Math.random() * 100) + 1;
		if (usedNums.length >= 100) return randomNum;
		while (usedNums.includes(randomNum)) {
			randomNum = Math.floor(Math.random() * 100) + 1;
		}
		usedNums.push(randomNum);
		return randomNum;
	};
})();