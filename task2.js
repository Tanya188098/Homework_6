//Написать функцию, которая получает 3 аргумента: два числа и функцию.
//Произвести вызов переданной функции с двумя аргументами числами.
//doFunction(2, 3, power); в ответе должны получить 8, как 2 в степени 3.

function doFunction(x, y, power) {
    return power(x, y);
}

function power(x, y) {
    return x ** y;
}

document.write(doFunction(2, 3, power));

//замыкание
//function doFunction(x,y,pow){
//    
//    function pow(x,y){
//        return x ** y;
//    }
//    return pow(2,3);
//}
//
//let res = doFunction();
//document.write(res);
