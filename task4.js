//Написать функцию, которая получает 3 аргумента: два числа и функцию.
//Произвести вызов переданной функции с двумя аргументами числами. 
//Из п.2, если количество числовых аргументов равно единице  и переданная функция factorial - реализовать расчет факториaла.

function doFunction(x, y, func) {
    for (let i = 0; i < arguments.length; i++) {
        if (arguments.length === 2 && isNaN(arguments[1])) {
            return factorial(x);
        } else {
            return power(x, y);
        }
    }
}

function power(x, y) {
    return x ** y;
}

function factorial(x) {
    if (x === 1) {
        return 1;
    }
    if (x !== 1) {
        return x * factorial(x - 1);
    }
}

document.write(doFunction(4, factorial) + '<br>');
document.write(doFunction(2, 3, power));
