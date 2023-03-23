'use strict';

const waterVolume = 48;
const weightOfOnePotato = 75;
const priceForKg = 13;
const sumOfPotatoes = 4;
function priceOfPotatoes (volume, weight, price, sum) {
	const weightForDish = Math.ceil(volume * sum * weight / 1000)
	return weightForDish * price
}

priceOfPotatoes(waterVolume, weightOfOnePotato, priceForKg, sumOfPotatoes);