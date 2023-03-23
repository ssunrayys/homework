'use strict';

// function plural(n,str1,str2,str5){return n + ' ' + ((((n%10)==1)&&((n%100)!=11))?(str1):(((((n%10)>=2)&&((n%10)<=4))&&(((n%100)<10)||((n%100)>=20)))?(str2):(str5)))}
// alert(plural(23, 'год', 'года', 'лет'));
//

function plural(number, titles) {
	const key = [2, 0, 1, 1, 1, 2];
	return titles[ (number%100>4 && number%100<20)? 2 : key[(number%10<5)?number%10:5] ];
}

const endOfYear = ['год', 'года', 'лет'];

console.log('1 ', plural(1, endOfYear));
