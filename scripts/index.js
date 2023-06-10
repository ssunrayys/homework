'use strict';

let user = {
	data: {
		a: 1,
		b: 2,
		c: 3,
		d: {
			a1: 1,
			b1: 2,
			c1: 3,
			d1: {
				a2: 3,
				b2: 3,
				c2: 3,
			}
		},
	}
}

const deepFreeze = (obj) => {
	for (let key in obj) {
		// const objKeys = Object.getOwnPropertyNames(obj);
		Object.freeze(obj);
		if (typeof obj === 'object') {
			return deepFreeze(obj[key]);
		} else {
			return obj;
		}
	}
}
deepFreeze(user)

user.data = 123;

console.log(user.data)