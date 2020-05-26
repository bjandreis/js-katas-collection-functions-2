// Kata 1 - Add

function add (x, y) {
    return x + y
}
console.log(add(2, 4)) // returns 6

// Kata 2 - Multiply

function multiply (x, y) {
    let defaultNumber = x

    for (i = 1; i < y; i++) {
        x = add(x, defaultNumber)
    }
    return x
}
console.log(multiply(6, 4)) // returns 24

// Kata 3 - Power/Exponentiation

function power (x, n) {
    for (i = 1; i < n; i++) {
        x = multiply(x, x)
    }
    return x
}
console.log(power(2, 8)) // returns 256

// Kata 4 - Factorial

function factorial (x) {
    for (i = x - 1; i > 0; i--) {
        x = multiply(x, i)
    }
    return x
}
console.log(factorial(4)) // returns 24

// Kata 5 - Fibonacci

function fibonacci (n) {
    const fibonacciArray = [0, 1, 1]
    let previousNumber = fibonacciArray[1]
    let currentNumber = fibonacciArray[2]

    for (i = 3; i < n; i++) {
        fibonacciArray[i] = add(previousNumber, currentNumber)
        currentNumber = fibonacciArray[i]
        previousNumber = fibonacciArray[i - 1]
    }
    return currentNumber
}
console.log(fibonacci(8)) // returns 13
