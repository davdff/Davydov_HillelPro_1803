const action = prompt("Введіть операцію (add, sub, mult, div): ");

let num1 = prompt("Введіть перше число: ")
let num2 = prompt("Введіть друге число: ")

num1 = parseFloat(num1)
num2 = parseFloat(num2)

let result;
let operator;

switch (action) {
    case "add":
        result = num1 + num2;
        operator = "+";
        break;
    case "sub":
        result = num1 - num2;
        operator = "-";
        break;
    case "mult":
        result = num1 * num2;
        operator = "*";
        break;
    case "div":
        result = num1 / num2;
        operator = "/";
        break;
}
alert(`${num1} ${operator} ${num2} = ${result}`);