//3. Из п.2 реализовать функции sum, div, multiply, power
//doFunction(16, -23, mul); // 16*(-23)

function doFunction(x, y, func) {
    return mul(x, y);
}

function sum(x, y) {
    return x + y;
}

function div(x, y) {
    return x / y;
}

function mul(x, y) {
    return x * y;
}

function pow(x, y) {
    return x ** y;
}

document.write(doFunction(16, -23, mul));
