Sticks Problem – Triangle Check
Problem Description

Hassan and Ali found three sticks during their breaktime. Hassan asked Ali if these three sticks can form a triangle.

Your task is to determine whether three given stick lengths can form a triangle.

Input

Three integers: X, Y, Z

Constraints: 1 ≤ X, Y, Z ≤ 10^13

Example:

3 4 5

Output

Print "YES" if the sticks can form a triangle.

Print "NO" otherwise.

Example:

YES

Triangle Condition

To form a triangle, the sum of any two sides must be greater than the third side:

X + Y > Z
X + Z > Y
Y + Z > X


If all three conditions hold → triangle is possible → "YES"
Otherwise → "NO"

Example Cases

Input

3 4 5


Output

YES


Input

1 2 3


Output

NO

Implementation Notes

Use long long int (or equivalent) to handle large numbers up to 10^13.

Read inputs from standard input.

Output should only be "YES" or "NO".
