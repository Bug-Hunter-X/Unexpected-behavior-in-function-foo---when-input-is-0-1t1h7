# JavaScript Bug: Unexpected Behavior in Function foo()

This repository demonstrates a subtle bug in a JavaScript function and its solution.

## Bug Description

The function `foo()` exhibits unexpected behavior when the input `x` is 0. It should ideally return a specific value or throw an error for this case, but instead, it behaves differently. 

## Bug Reproduction

1. Clone this repository.
2. Open `bug.js` and observe the function `foo()`.
3. Run `bug.js`.
4. Observe the output for various input values including 0.

## Bug Solution

The solution involves explicitly handling the case where `x` is 0 in the function's logic to ensure proper behavior.

## Solution Code

The solution is provided in `bugSolution.js`.