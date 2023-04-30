const table = document.createElement('table');

for (let i = 0; i < 10; i++) {
    const row = document.createElement('tr');

    for (let j = 0; j < 10; j++) {
        const col = document.createElement('td');
        const colText = document.createTextNode(i * 10 + j + 1);
        col.appendChild(colText);
        row.appendChild(col);
    }

    table.appendChild(row);
}

document.body.appendChild(table);



