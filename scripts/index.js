'use strict';

const list = document.getElementsByTagName('li');

console.log(`List count = ${list.length}!`);

let arrOfLi = [];

for (let info of list) {
	arrOfLi.push(info.textContent);
}

console.log(arrOfLi);


