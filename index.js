const express = require('express');
const path = require('path');
const url = require('url');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/venta', (req, res) => {
  const query = url.parse(req.url, true).query;
  res.send(query);

});


app.use('/static', express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log('Example app listening on port 3000!'));