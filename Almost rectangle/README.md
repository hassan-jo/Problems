# Almost Rectangle

This is a solution to the **"Almost Rectangle"** problem.

## Problem Description

Tamer was playing with a rectangle and accidentally broke it. Now the rectangle is missing a small triangular corner. The goal is to calculate the area of the resulting shape.

### Input

Four integers: `a`, `b`, `c`, `d`  
Where:  
- \(1 \le c < a \le 103\)  
- \(1 \le d < b \le 103\)  

Here:  
- `a` = width of the original rectangle  
- `b` = height of the original rectangle  
- `c` and `d` = dimensions that define the triangular piece removed from one corner

### Output

Print the area of the resulting shape, rounded to **6 decimal places**.

### Example

**Input:**  
4 3 1 1


**Output:**  
9.000000


**Explanation:**  
- Original rectangle area = 4 × 3 = 12  
- Removed triangle area = (4-1) × (3-1) / 2 = 3  
- Remaining area = 12 - 3 = 9

## Solution

The area of the remaining shape can be calculated using the formula:

Area = a * b - (a - c) * (b - d) / 2
