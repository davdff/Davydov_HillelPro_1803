//10.1
// let arr = []
// for (let i = 10; i <= 20; i++) {
//     arr.push(i)
// }
// alert(arr)

//10.2
// let arr = []
// for (let i = 10; i <= 20; i++) {
//     let square = i ** 2
//     console.log(square)
// }

//10.3
// for (let i = 1; i <= 10; i++) {
//     let mult = 7 * i;
//     console.log("7 x " + i + " = " + mult);
// }

//10.4
// let sum = 0;
// for (let i = 1; i <= 15; i++) {
//     sum += i;
// }
// console.log(sum);

//10.5
// let mult = 1;
// for (let i = 15; i <= 35; i++) {
//     mult *= i;
// }
// console.log(mult)

//10.6
// let sum = 0
// for (let i = 1; i <= 500; i++) {
//     sum += i;
// }
// let result = sum / 500
// console.log(result)

//10.7
// let sum = 0
// for (let i = 30; i <= 80; i++) {
//     if (i % 2 == 0) {
//         sum += i
//     }
// }
// console.log(sum)

//10.8
// let res = []
// for (let i = 100; i <= 200; i++) {
//     if (i % 3 == 0) {
//         console.log(i)
//     }
// }

//10.9
// let num = prompt('Введіть число: ')
// let arr = []
// for (i = 1; i <= num; i++) {
//     if (num % i === 0) {
//         arr.push(i)
//     }
// }
// alert(arr)

//10.10
// let number = prompt('Введіть число');
// let count = 0;
// for (let i = 1; i <= number; i++) {
//     if (number % i === 0 && i % 2 === 0) {
//         count++;
//     }
// }
// alert(count)

//10.11
// let num = prompt('Введіть число: ');
// let sum = 0;

// for (let i = 1; i <= num; i++) {
//     if (num % i === 0 && i % 2 === 0) {
//         sum += i;
//     }
// }
// alert(sum)

//10.12
// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         const mult = i * j;
//         console.log(`${i} * ${j} = ${mult}`);
//     }
// }