var a="Recursive Function Example (Given)";
console.log(a);
function countDown(fromNumber) {
    console.log(fromNumber);

    var nextNumber = fromNumber - 1;

    if (nextNumber > 0) {
        countDown(nextNumber);
    }
}
countDown(5);
var b="Assignment: Sum of n Natural Numbers using Recursion";
console.log(b);
//sum(10) → calculate
function sum(n) {
    if (n === 0) {
        return 0;     
    }
    return n + sum(n - 1); 
}
console.log(sum(10));