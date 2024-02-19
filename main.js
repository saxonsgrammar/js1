function Power(x, y) {
    let result = 1;
    
    if (y == 0) result = 1;
    else {
        result = x * Power(x, y - 1);
    }

    document.getElementById("span1").innerHTML = `Результат: ${result}`;
    return result;
} 

function Min(x, y) {
    return x < y? x : y;
}
function Max(x, y) {
    return x > y? x : y;
}
function GCD(x, y) {
    let min = Min(x, y);
    let max = Max(x, y);

    if (x === 0) result = y;
    if (y === 0) result = x;
    else result = GCD(max - min, min);

    document.getElementById("span2").innerHTML = `Результат: ${result}`;
    return result;
} 

function Max_Digit(x) {
    numStr = Math.abs(x).toString();
    digits = numStr.split('').map(Number);
    maxDigit = Math.max(...digits);

    document.getElementById("span3").innerHTML = `Результат: ${maxDigit}`;
} 

function Is_Prime() {
    let x = parseInt(document.getElementById("in6").value);
    let result = true;

    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i == 0) result = false;
    }

    document.getElementById("span4").innerHTML = `Результат: ${result}`;
} 

function Factorization() {
    let x = parseInt(document.getElementById("in7").value);
    factors = [];

    while (x % 2 === 0) {
        factors.push(2);
        x /= 2;
    }
    for (let i = 3; i <= Math.sqrt(x); i += 2) {
        while (x % i === 0) {
            factors.push(i);
            x /= i;
        }
    }
    if (x > 2) {
        factors.push(x);
    }

    document.getElementById("span5").innerHTML = `Результат: ${factors}`;
} 

function Fib(x) {
    x > 1 ? result = Fib(x - 1) + Fib(x - 2) : result = x;

    document.getElementById("span6").innerHTML = `Результат: ${result}`;
    return result;
} 