function foo(x) {
  if (x === null) {
    return 0; 
  } else if (x > 0) {
    return x + 1;
  }
  return -1;
}

console.log(foo(null)); // Output: 0
console.log(foo(5)); // Output: 6
console.log(foo(-5)); // Output: -1
console.log(foo(0)); //Output: -1