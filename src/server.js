'use strict';

const express = require('express');
const errorHandler = require('./error-handlers/500');
const notFound = require('./error-handlers/404');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const PORT = process.env.PORT || 3001;

const app = express();

app.get('/', (req, res, next) => {
  
  const message = `Working Good!`;
  res.status(200).send(message);
});

app.use(logger);

// app.get('/log', logger, (req, res, next) => {

//   res.status(200).send(req.log);
// });

app.get('/person', validator, (req, res, next) => {

  let person = {
    name: req.query.name,
  };
  // if (!req.query.name) {
    // next();
    // return;
  //   res.status(500).send('Error')
  // };
  res.status(200).json(person);
});

function start() {
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

app.use(errorHandler);
app.use('*', notFound);

module.exports = { start, app };
