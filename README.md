Asking the user for a number

We need to find the minimum divisor of the given number.

To do this, it is enough to sequentially check the divisibility, starting from two. If the divisor is not found, then the number is prime, and the divisor is the number itself.

If the passed number is less than one, then output NaN to the console. otherwise print the smallest divisor of a number.