'use strict';

function getPalindrome(num, steps = 0){
	if(num < 0) return false;
	if(num % 10 === 0) return false;
	
	if (isPalindrome(num)) {
		return { result: num, steps: steps };
	} else {
		steps++;
		num += reverseNumber(num);
		return getPalindrome(num, steps);
	}

	
	function reverseNumber(num){
		let reversedStr = num.toString().split("").reverse().join("");
		return parseInt(reversedStr);
	}
	
	function isPalindrome(num){
		let str = num.toString();
		for (let i = 0, j = str.length - 1; i < j; i++, j--) {
			if (str.charAt(i) !== str.charAt(j)) {
				return false;
			}
		}
		return true;
	}
	
}

console.log(getPalindrome(85));