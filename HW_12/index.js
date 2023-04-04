let length = prompt("Введіть довжину масиву:");

let arr = [];

for (let i = 0; i < length; i++) {
    let element = prompt(`Введіть елементи ${i}:`);
    arr.push(element);
}
alert(arr)
arr.sort()
alert(arr)
arr.splice(1, 3)
alert(arr)