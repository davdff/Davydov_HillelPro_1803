//13.1
// let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]
// let sum = 0
// let count = 0
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         sum += arr[i]
//         count++
//     }
// }
// console.log(`Сума позитивних елементів ${sum}`)
// console.log(`Кількість позитивних елементів ${count}`)

//13.2
// let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]
// let min = arr[0]
// let index = 0

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i]
//         index = i
//     }
// }

// console.log(`Мінімальний елемент: ${min}`)
// console.log(`Порядковий номер мінімального елемента: ${index}`)

//13.3
// let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]

// let max = arr[0];
// let index = 0;

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//         index = i;
//     }
// }

// console.log(`Максимальнйи елемент: ${max}`);
// console.log(`Порядковий номер максимального елемента: ${index}`);

//13.4
// let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]

// let count = 0
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < 0) {
//         count++
//     }
// }
// console.log(`Кількість негативних елементів ${count}`)

//13.5
// let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]
// let count = 0

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0 && arr[i] > 0) {
//         count++
//     }
// }
// console.log(count)


//13.6
// let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]
// let count = 0

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] % 2 === 0 && arr[i] > 0) {
//         count++
//     }
// }
// console.log(count)

//13.7
// let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]
// let sum = 0

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] % 2 === 0 && arr[i] > 0) {
//         sum += arr[i]
//     }
// }
// console.log(sum)

//13.8
// let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]
// let sum = 0

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0 && arr[i] > 0) {
//         sum += arr[i]
//     }
// }
// console.log(sum)

//13.9
// let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]
// let mult = 1

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         mult *= arr[i]
//     }
// }
// console.log(mult)

//13.10
// let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]
// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }
// let selectedElement = max;
// let indexSelected = arr.indexOf(selectedElement);

// if (indexSelected !== -1) {
//     arr.splice(0, indexSelected);
//     arr.splice(1);

//     console.log(arr);
// }