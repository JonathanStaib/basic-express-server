'use strict';

const { app } = require('../server');
const supertest = require('supertest');
const request = supertest(app);
// const validator = require('./validator');
const { query } = require('express');

describe('API Server', () => {

  it('hits 500 if /person is hit but no query', async () => {
    const response = await request.get('/person');

    expect(response.status).toEqual(500);
  });

  it('handles /person route with query properly', async () => {
    const response = await request.get('/person').query('name');
    console.log('got a name');
    expect(response.status).toEqual(200);
  });

});
