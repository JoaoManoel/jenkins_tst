const supertest = require('supertest');
const should = require('should');

const server = supertest.agent('http://localhost:2300');

describe('Sample test', () => {
  it('should return status ok', (done) => {
    server
      .get('/')
      .expect('Content-type', 'application/json')
      .expect(200)
      .end((err, res) => {
        res.header['content-type'].should.equal('application/json; charset=utf-8');
        res.body.status.should.equal('OK');
        done();
      });
  });
});
