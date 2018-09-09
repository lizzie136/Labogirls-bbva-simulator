const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/venta', (req, res) => res.send('Hello World!'));

app.listen(PORT, () => console.log('Example app listening on port 3000!'));