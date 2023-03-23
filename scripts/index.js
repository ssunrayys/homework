'use strict';

const waterVolume = 48;
const weightOfOnePotato = 75;
const priceForKg = 13;
function priceOfPotatoes (volume, weight, price) {
	const weightForDish = Math.ceil(volume * 4 * weight / 1000)
	return weightForDish * price
}

priceOfPotatoes(waterVolume, weightOfOnePotato, priceForKg);