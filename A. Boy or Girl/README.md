# A. Boy or Girl

## Problem Description

Many boys use beautiful girls' photos as avatars in forums, making it hard to tell the gender of a user at first glance. 

Our hero used to chat with a user he thought was a girl. But when he met them in real life, he realized the user was actually a strong man. 

To avoid this, he came up with a method to guess the gender based on the user name:

- If the number of **distinct characters** in the user name is **odd**, the user is male.
- Otherwise, the user is female.

You are given a string representing the user name. Your task is to determine the gender of the user using this method.

---

## Input

- A single non-empty string containing only **lowercase English letters**.
- The string length is at most 100.

---

## Output

- Print `CHAT WITH HER!` if the user is female according to the method.
- Print `IGNORE HIM!` if the user is male according to the method.

---

## Examples

**Input 1:**
wjmzbmr

**Output 1:**
CHAT WITH HER!


**Input 2:**
xiaodao


**Output 2:**
IGNORE HIM!


**Input 3:**
sevenkplus


**Output 3:**
CHAT WITH HER!


---

## Note

- For the first example, the distinct characters in `"wjmzbmr"` are: `w, j, m, z, b, r` (6 characters, even).  
  Hence, the output is `CHAT WITH HER!`.





