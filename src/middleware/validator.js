'use strict';

const validator = (req, res, next) => {
  let name = req.query.name;

  // if (!name) {
  //   res.status(500).send('Error');
  //   next();
  // } else {
  //   next();
  // }
  if(name){
    next();
  } else {
    next('Query Name Required');
  }
};

module.exports = validator;