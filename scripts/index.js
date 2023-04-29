'use strict';

const list = document.getElementsByTagName('li');


for (let info of list){
	console.log(info)
}

console.log(`List count = ${list.length}!`);

let arrOfLi = [];

for (let info of list) {
	arrOfLi.push(info.textContent);
}

console.log(arrOfLi);


