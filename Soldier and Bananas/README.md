Borrowed Money Problem
Problem Description

A student wants to buy n toys. Each toy costs k dollars multiplied by its order (the first toy costs 1*k, the second 2*k, etc.).
The student has a certain amount of money dollars.

Your task is to determine how much more money the student needs to borrow in order to buy all the toys.

Input

Three integers:

k – the cost multiplier for the toys.

dollars – the amount of money the student currently has.

n – the number of toys to buy.

Example:

3 17 4

Output

Print a single integer: the amount the student needs to borrow.

If the student has enough money, the borrow amount should be 0.

Example:

13

Calculation

Compute the total cost of all toys:

total = k * (1 + 2 + ... + n)
      = k * n * (n + 1) / 2


Compute the borrow amount:

borrow = max(0, total - dollars)

Implementation Notes

Use long long int for k, dollars, n, and total to handle large values and avoid overflow.

Read inputs using cin >> k >> dollars >> n;

Initialize total to 0 if computing via loop.

For efficiency, use the direct formula for sum of first n integers.
