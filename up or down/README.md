Omar's Card Trick – Last Card Face
Problem Description

Omar has a new card trick. He takes a deck of N face-down cards and performs N iterations of flipping:

On iteration 1, he flips all cards.

On iteration 2, he flips every 2nd card.

On iteration i, he flips every ith card.

Your task is to determine whether the Nth (last) card is face up or face down after all iterations.

Input

A single integer N (1 ≤ N ≤ 10^9) representing the number of cards.

Example:

9

Output

Print "Face up." if the last card is face up.

Print "Face down." if the last card is face down.

Example:

Face up.

Key Insight

The last card flips once for every divisor of N.

If the number of divisors of N is odd, the card ends Face up.

If the number of divisors of N is even, the card ends Face down.

Observation:

Only perfect squares have an odd number of divisors.

Therefore:

If N is a perfect square → "Face up."

Otherwise → "Face down."

Examples

Input

6


Output

Face down.


Input

9


Output

Face up.

Implementation Notes

Use sqrt(N) to check if N is a perfect square.

Avoid iterating through 1 to N; it would be too slow for large N.

Use long long to handle large values.
