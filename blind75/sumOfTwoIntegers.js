// Given two integers a and b, return the sum of the two integers without using the operators + and -.
// Example 1:

// Input: a = 1, b = 2
// Output: 3
// Example 2:

// Input: a = 2, b = 3
// Output: 5


const getSum = (a, b) => {
    while (b !== 0) {
        let carry = a & b;
        a = a ^ b;
        b = carry << 1;
    }
    return a;
};

console.log(getSum(1, 2));
console.log(getSum(2, 3));


// Solution: Use bitwise manipulation.XOR(^) will add numbers, but will not account for binary numbers that should be carried(e.g. 1000(ADD) 1000 != 10000).To solve this we make a carry variable - we find the number(s) to be carried with the AND(&) operator and use the Left Shift property(<<) to increment the number to it’s proper placement(e.g. 10000).
// We set XOR to param a, and the carry to param B and loop until param B equals zero.This allows us to account for all potential carries in the parameters.