//Функция должна вернуть массив из центральных элементов переданных массивов.
// Центральный элемент, это один центральный, если массив по длине непарный
//[1, 2, 3, 4, 5] -> 3
//Центральный элемент, это пара центральных, если массив по длине парный:
//[1, 2, 3, 4, 5, 6] -> 3, 4

function calculate() {
    let arr = [];
    let newArr = [];
    let j;
    for (let i = 0; i < arguments.length; i++) {
        arr[i] = arguments[i];
        if (arr[i].length % 2 === 0) {
            newArr.push(arr[i][arr[i].length / 2 - 1]);
            newArr.push(arr[i][arr[i].length / 2]);
        }
        if (arr[i].length % 2 === 1) {
            j = Math.round(arr[i].length / 2)
            newArr.push(arr[i][j]);
        }
    }
    return newArr;
}

document.writeln(calculate([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5]));