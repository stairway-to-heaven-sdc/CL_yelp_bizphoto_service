// import '@babel/polyfill';

const request = require('supertest');
const app = require('../server/app');
const { db } = require('../database/index.js');

let server = null;
beforeEach((done) => {
  server = app.listen(done);
});
afterEach((done) => {
  server.close(done);
});

afterAll(async () => {
  await db.close();
});

describe('GET / should return index.html file', () => {
  test('responds with json', async (done) => {
    await request(app).get('/').then((response) => {
      expect(response.header['content-type']).toEqual('text/html; charset=UTF-8');
      done();
    });
  });
});
// describe('GET /bizs/:bId should return index.html file', (done) => {

// });
