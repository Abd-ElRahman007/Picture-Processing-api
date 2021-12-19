import app from '../../server';
import supertest from 'supertest';
import routes from '../../routes/sharp';
import sharpModule from '../../module/module';

describe('check for the server Response', () => {
  it('should return a 200 response', async () => {
    const response = await supertest(app).get('/');
    expect(response.status).toBe(200);
  });
  it('should return a 200 response in /convert', async () => {
    const response = await supertest(app).get('/convert');
    expect(response.status).toBe(200);
  });
});

describe('check for the response values', () => {
  it('should return a string', async () => {
    const response = await supertest(app).get('/');
    expect(typeof response.text).toBe('string');
  });
  it('should return a string in /convert', async () => {
    const response = await supertest(app).get('/convert');
    expect(typeof response.text).toBe('string');
  });
  it('should return a res.sendFile', async () => {
    expect(typeof sharpModule).toBe('function');
  });
});

describe('check for the request values', () => {
  it('check for the request of the routes.get', () => {
    expect(routes.get).toBeDefined();
  });
  it('check for sharp() server response', async () => {
    const response = await supertest(app).get(
      '/convert?filename=test&width=100&height=100'
    );
    expect(response.text).toBe('file not found');
  });
});
