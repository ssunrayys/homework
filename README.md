You need to write an implementation of the padString function that takes 4 arguments:

string
number which is the long string we want to get as a result of the function execution
character (string 1 character long) - which will be added to the string, if necessary
a boolean parameter (true or false) that determines whether to add characters to the left or right (right by default)
When writing a function, it is imperative to check the arguments that we passed, and if there are no arguments, then return a string with an error from the function (return ‘some error’). The error message should be different depending on the condition for which the check failed.

The result of the function call must be output to the console - after the function ends.

For example:

Calling padString('hello', 8, '*') will return the string hello***

And calling padString('hello', 6, '*', false) will return the string *hello

Calling padString('hello', 2) will return 'he' - if the number is less than the size of the input string, you need to trim the string using the substr method