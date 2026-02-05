Helpful Maths - Problem Description
Problem Overview

Xenia is a beginner mathematician learning addition. Her teacher has written a sum using only the numbers 1, 2, and 3. The sum is written in a string format with numbers separated by plus signs (+).

Example of sums that might be on the board:

3+2+1

1+1+3+1+3

2

Xenia's Limitation

Xenia can only calculate sums if the numbers are in non-decreasing order. That means each number must be equal to or greater than the number before it.

She cannot calculate 1+3+2+1.

She can calculate 1+1+2 or 3+3.

Task

Your task is to rearrange the given sum so that Xenia can easily calculate it.

The output should still be a string in the same format (numbers separated by +).

Only rearrange the numbers to make them non-decreasing.

Input

A non-empty string s — the sum that Xenia needs to count.

The string contains only digits 1, 2, 3 and plus signs (+).

The string is guaranteed to be a valid sum using the numbers 1, 2, and 3.

The string length is at most 100 characters.

Output

Print the new sum in a format Xenia can calculate:

Numbers in non-decreasing order, separated by +.

Examples
Input
3+2+1

Output
1+2+3

Input
1+1+3+1+3

Output
1+1+1+3+3

Input
2

Output
2

Notes

Focus on sorting the numbers, the plus signs are just separators.
The sum may contain only one number.
Focus on sorting the numbers, the plus signs are just separators.

The sum may contain only one number.
