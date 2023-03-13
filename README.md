**Task 1**

Combine if statements that check the data entered by the user into 1 statement (combine checks using logical operators), it turns out that instead of 3 if..else..if you should have only one if with a combined condition and an else statement that fires on successful entry data.


**Task 2**

Rewrite the code below using the switch...case construct.

`let numOrStr = prompt('input number or string');
console.log(numOrStr)

if(numOrStr === null) {
console.log('вы отменили')
} else if( numOrStr.trim() === '' ) {
console.log('Empty String');
} else if( isNaN( +numOrStr ) ) {
console.log(' number is Ba_NaN')
} else {
console.log('OK!')
}`