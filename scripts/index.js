'use strict';

function getArray(arr){
	if (arguments.length > 1){
		throw new Error ('Function accepts only 1 argument, too much arguments provided')
	} else if (!Array.isArray(arr)){
		return arr.slice();
	}
	return arr.reduce(function (flat, toFlatten){
		return flat.concat(Array.isArray(toFlatten) ? getArray(toFlatten) : toFlatten);
	}, []);
}

const arr1 = [1, 2, [3, 4, [5, 6]]];
const flattenedArr = getArray(arr1);
