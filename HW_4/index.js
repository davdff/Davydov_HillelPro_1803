let num1 = prompt('Введіть перше число: ')
let num2 = prompt('Введіть друге число: ')
num1 = parseFloat(num1)
num2 = parseFloat(num2)

const add = num1 + num2;
const sub = num1 - num2;
const mult = num1 * num2;
const div = num1 / num2;

alert(`Користувач ввів ${num1} і ${num2}:
${num1} + ${num2} = ${add}
${num1} - ${num2} = ${sub}
${num1} * ${num2} = ${mult}
${num1} / ${num2} = ${div}`)