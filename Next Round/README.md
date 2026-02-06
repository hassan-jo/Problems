# Next Round

## Problem Description

In a contest, participants advance to the next round based on their scores. According to the contest rules:

> "Contestants who earn a score equal to or greater than the k-th place finisher's score will advance to the next round, as long as the contestant earns a positive score."

You are given the scores of all participants in non-increasing order. Your task is to calculate how many participants will advance to the next round.

---

## Input

- The first line contains two integers `n` and `k` (1 ≤ k ≤ n ≤ 50), where:
  - `n` — the number of participants.
  - `k` — the position used to determine the advancing score threshold.
  
- The second line contains `n` space-separated integers `a1, a2, ..., an` (0 ≤ ai ≤ 100), representing the scores of the participants in non-increasing order.

---

## Output

- Output a single integer — the number of participants who advance to the next round.

---

## Examples

**Example 1:**

Input:
8 5
10 9 8 7 7 7 5 5

Output:
6


**Example 2:**



Input:
4 2
0 0 0 0

Output:
0


---

## Note

- In the first example, the 5th place participant scored `7`. All participants with scores `>= 7` and positive advance, resulting in 6 participants advancing.
- In the second example, all participants scored `0`, so no one advances.

---

## Constraints

- 1 ≤ k ≤ n ≤ 50
- 0 ≤ ai ≤ 100
- The scores are given in **non-increasing order**.
