let quantity = prompt('Введіть кількість годин: ')
quantity = parseFloat(quantity)

const secPerHour = 3600

let result = quantity * secPerHour
alert(`${result}`)