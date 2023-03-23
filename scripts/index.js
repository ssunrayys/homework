'use strict';

//task #1

const user = {
	name: 'John',
	surname: 'Smith',
};

user.name ='Pete';

delete user.name;

//task #2

alert('Да, это будет работать. Мы можем изменить содержимое обьекта.');

//task #3

const salaries = {
	John: 100,
	Ann: 160,
	Pete: 130,
	Andrey: 40,
};
let allSalaries = 0;
for (let key in salaries) {
	allSalaries += salaries[key];
}
console.log(allSalaries);
