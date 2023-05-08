'use strict';

let arr = [1, 2, 3];
function generateList(array){
	let doc = '<ul>';
	for (let i = 0; i < array.length; i++) {
		doc += '<li>';
		if (Array.isArray(array[i])) {
			doc += generateList(array[i]);
		} else {
			doc += array[i];
		}
		doc += '</li>';
	}
	doc += '</ul>';
	return doc;
}

generateList(arr);