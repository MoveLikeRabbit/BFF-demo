const request = require('supertest');
const expect = require('chai').expect;

describe('api test', () => {
  it('获取图书列表接口是否正确', function () {
    request('http://localhost:3000')
      .get('/api/getBooksList')
      .expect(200)
      .end((err, res) => {
        expect(res.body.data.length).equal(2);
      });
  });
});
