//17.1
// const arr = [2, 'Hello', 6, 'asd', 5]
// function averageNumericElements(arr) {
//     let sum = 0;
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'number') {
//             sum += arr[i];
//             count++;
//         }
//     }

//     return count === 0 ? 0 : sum / count;
// }

// const result = averageNumericElements(arr)
// console.log(result)

// 17.2
// function doMath(x, znak, y) {
//     if (znak == '+') {
//         return x + y;
//     } else if (znak == '-') {
//         return x - y;
//     } else if (znak == '*') {
//         return x * y;
//     } else if (znak == '/') {
//         return x / y;
//     } else if (znak == '%') {
//         return x % y;
//     } else if (znak == '^') {
//         return x ** y;
//     } else {
//         console.log("Невідомий знак операції");
//     }
// }


// switch(znak) {
//     case '+':  // if (x === 'value1')
//       return x + y
//       [break]
  
//     case 'value2':  // if (x === 'value2')
//       ...
//       [break]
  
//     default:
//       ...
//       [break]
//   }

// const result = doMath(2, 'asd', 2)
// console.log(result)

//17.3
// let rows = prompt("Введіть кількість рядків:");
// let cols = prompt("Введіть кількість стовпців:");

// function fillArray(rows, cols) {
//     const arr = [];
//     for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < cols; j++) {
//             arr[i][j] = prompt(`Введіть значення для елементу (${i}, ${j}):`);
//         }
//     }
//     return arr;
// }


// let myArray = fillArray(rows, cols);
// alert(myArray);

//17.4
// function remove(str, charsToRemove) {
//     let result = "";
//     for (let i = 0; i < str.length; i++) {
//         let charToRemove = false;
//         for (let j = 0; j < charsToRemove.length; j++) {
//             if (str[i] === charsToRemove[j]) {
//                 charToRemove = true;
//                 break;
//             }
//         }
//         if (!charToRemove) {
//             result += str[i];
//         }
//     }
//     return result;
// }
// const str = " hello world";
// const charsToRemove = ['e', 'd'];
// const result = remove(str, charsToRemove);
// console.log(result); 