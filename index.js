const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const server = express();
const port = 3333;

server.use(morgan('common'));
server.use(bodyParser.json());

server.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, UserID',
  );
  next();
});

data = [
  {
    id: 1,
    name: 'one',
  },
  {
    id: 2,
    name: 'two',
  },
];

server.get('/', (req, res) => {
  res.json(data);
});

server.post('/', (req, res, next) => {
  const { body } = req;
  console.log(body);
  data.push(body);
  res.json(body);
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
