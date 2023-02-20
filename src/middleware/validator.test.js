'use strict';

const { app } = require('../server');
const supertest = require('supertest');
const request = supertest(app);
// const validator = require('./validator');
const validator = require('../middleware/validator');

describe('validator', () => {
  let req = {query: {name: 'Jonny'}};
  let res = {};
  let next = jest.fn();

  it('validates query as expected', () => {
    validator(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });

  // it('hits 500 if /person is hit but no query name', async () => {
  //   const response = await request.get('/person');

  //   expect(response.status).toEqual(500);
  // });

  it(`fails if no query name`, () => {
    req = { query: {notName: 'Greg'}};
    validator(req, res, next);

    expect(next).toHaveBeenCalledWith('Query Name Required');
  });

  // it('handles /person route with query properly', async () => {
  //   const response = await request.get('/person').query('name');
  //   console.log('got a name');
  //   expect(response.status).toEqual(200);
  // });

});
