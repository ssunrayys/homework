'use strict';

const x = 4;
const y = 9;
const r = 10;
const hypotenuse = x**2 + y**2;
const z = Math.sqrt(hypotenuse);

z <= r ? console.log('The point is in the circle') : console.log('The point is not in the circle')