const http = require('http');
const fs = require('fs');
function getRandNum(min, max) {
    return (Math.random() * (max - min) + min).toFixed(4)
}

const createOffer = new Array(25).fill(null).map((_, i) => ({
    id: i,
    name: `Offer${i}`,
    coordinate: [getRandNum(36.0000, 37.5000), getRandNum(36.0000, 37.5000)]
}))

fs.writeFileSync('offers.txt', JSON.stringify(createOffer));

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    const url = req.url;
    const method = req.method;

    if (method === 'POST') {
        if (url === '/add-offer') {
            let body = '';

            req.on('data', (chunk) => {
                body += chunk;
            });

            req.on('end', () => {
                const newOffer = JSON.parse(body);

                const offers = JSON.parse(fs.readFileSync('offers.txt', 'utf8'));
                offers.push(newOffer);

                fs.writeFileSync('offers.txt', JSON.stringify(offers));

                res.write('Offer added successfully');
                res.end();
            });
        } else {
            res.write('wrong route');
            res.end();
        }
    } else if (method === 'GET') {
        if (url === '/offers') {
            const data = fs.readFileSync('offers.txt', 'utf8');
            res.write(data)
            res.end()
        } else {
            res.write('wrong route');
            res.end();
        }
    }
}).listen(4001, function () {
    console.log("server start at port 4001");
});