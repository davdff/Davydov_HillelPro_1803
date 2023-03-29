let operation = prompt("Введіть назву операції (+, -, *, /)");

let num1 = prompt("Введіть перше число");
Number(num1)

if (isNaN(num1)) {
    alert("Перше значення не є числом");
}
let num2 = prompt("Введіть друге число");
Number(num2)

if (isNaN(num2)) {
    alert("Друге значення не є числом");
} else if (operation === "/" && num2 === 0) {
    alert("Друге число не може бути 0 при діленні");
} else {
    let result;

    if (operation === "+") {
        result = num1 + num2;
    } else if (operation === "-") {
        result = num1 - num2;
    } else if (operation === "*") {
        result = num1 * num2;
    } else if (operation === "/") {
        result = num1 / num2;
    }

    alert(`${num1} ${operation} ${num2} = ${result}`);
}