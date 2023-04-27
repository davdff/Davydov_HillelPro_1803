class SuperMath {
    check(obj) {
        const x = obj.X;
        const y = obj.Y;
        const znak = obj.znak;

        if (['+', '-', '*', '/', '%'].includes(znak)) {
            if (znak === '/' || znak === '%' && y === 0) {
                alert('На 0 ділити не можна');
                return this.input();
            }

            const confirmation = prompt(`Ви хочете виконати операцію ${x} ${znak} ${y}? Введіть Y якщо так, або N якщо ні`);

            if (confirmation && confirmation.toUpperCase() === 'Y') {
                switch (znak) {
                    case '+':
                        return x + y;
                    case '-':
                        return x - y;
                    case '*':
                        return x * y;
                    case '/':
                        return x / y;
                    case '%':
                        return x % y;
                }
            } else {
                return this.input();
            }
        }


    }

    input() {
        const x = prompt('Введіть значення X:');
        const y = prompt('Введіть значення Y:');
        const znak = prompt('Введіть знак операції (+, -, *, /, %):');

        const obj = { X: Number(x), Y: Number(y), znak };
        return this.check(obj);
    }
}

const p = new SuperMath();
const obj = { X: 12, Y: 3, znak: '/' };
const result = p.check(obj);
console.log(result);  