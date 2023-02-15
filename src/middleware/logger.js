'use strict';

const logger = (req, res, next) => {
  req.log = 'logging';
  next();
};

module.exports = logger;