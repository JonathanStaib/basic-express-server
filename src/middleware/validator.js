'use strict';

const validator = (req, res, next) => {
  let name = req.query.name;

  if (!name) {
    res.status(500).send('Error');
    next();
  } else {
    next();
  }
  // const valid= `${req.query.name}`;
  // res.status(200).json(valid);
};

module.exports = validator;