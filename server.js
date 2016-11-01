const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const tvShowRouter = require('./tvShow/tvShowRouter');

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());

//Exercise 1
app.get('/hello', (request, response) => response.send('hello world'));

//Exercise 2
app.use('/tvshow', tvShowRouter);

app.listen(port,() => {
  console.log(`Example app listening on port ${port}`);
});
