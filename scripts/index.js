'use strict';

let year = prompt('Write your birthday year');
if (year !== null && typeof +year === 'number' && !Number.isNaN(+year)) {
	const city = prompt('Write your city')
	if (city !== null) {
		const sport = prompt('Write your favourite sport')
		if (sport !== null) {
			let currentYear = new Date().getFullYear();
			let age = currentYear - year;
			let cityMessage;
			switch (city) {
				case "Odessa":
				case "Warsaw":
				case "Helsinki":
					cityMessage = `You live in the capital ${city}`;
					break;
				default:
					cityMessage = `You live in the city ${city}`;
			}
			let sportMessage;
			switch (sport) {
				case "Football":
					sportMessage = "Do you want to be Messi?";
					break;
				case "Basketball":
					sportMessage = "Do you want to be Lebron";
					break;
				case "Tennis":
					sportMessage = "Do you want to be Federov?";
					break;
				default:
					sportMessage = `Do you want to be champion in ${sport}?`;
			}
			const message = `You are ${age} year. ${cityMessage}, ${sportMessage}`;
			alert(message);
		}
		else {
			alert(`Жаль, что Вы не захотели ввести свой любимый вид спорта`)
		}
	}
	else {
		alert(`Жаль, что Вы не захотели ввести свой город`)
	}
}
else {
	alert(`Жаль, что Вы не захотели ввести свой возраст`)
}




