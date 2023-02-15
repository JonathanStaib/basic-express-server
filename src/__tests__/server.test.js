'use strict';

const { app } =  require('../server');
const supertest = require('supertest');
const request = supertest(app);

describe('API Server', () => {
  it('should handle invalid requests', async () => {
    const response = await request.get('/invalid');
    expect(response.status).toEqual(404);

  });
});