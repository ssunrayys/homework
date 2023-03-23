Given an array with numbers const arr = [1, 2, 3, -1, -2, -3];

You need to write a function that will return a new array containing only positive numbers. For this:

- Create a function with an arbitrary name

- The function takes an array as a parameter

- In the function body, create an empty array (example: const exampleArr = [])

- If the array passed to the function parameter is empty, then we return a message about this

- Loop through the array that is passed as a parameter (use a for loop)

- In the body of the loop, we check whether the current element is a positive number or negative (if)

- If the number is positive, then add it to the previously created array using the push function (example exampleArr.push(currentPositiveNumber))

- After executing the loop, we check the array, which was filled with only positive values

- If it is not empty, then return this array

- If empty, return null