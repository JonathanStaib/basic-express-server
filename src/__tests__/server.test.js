'use strict';

const { app } =  require('../server');
const supertest = require('supertest');
const request = supertest(app);

describe('API Server', () => {
  it('should handle invalid route', async () => {
    const response = await request.get('/invalid');
    expect(response.status).toEqual(404);

  });

  it('should handle invalid method', async () => {
    const response = await request.post('/person');
    expect(response.status).toEqual(404);

  });

  test('handles the person post route', async () => {
    const response = await request.get('/person?name=Jonny');
    let nameJson = JSON.stringify({name: 'Jonny'});
    expect(response.text).toEqual(nameJson);
    expect(response.status).toEqual(200);
  });

  test('fails the person post route if no query name', async () => {
    const response = await request.get('/person');
    expect(response.status).toEqual(500);
  });
  
});