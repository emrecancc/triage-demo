import request from 'supertest';
import app from '../src/app';

jest.setTimeout(10000);

describe('POST /users/login', () => {
  it('returns JWT token', async () => {
    const response = await request(app)
      .post('/users/login')
      .send({ username: 'testuser', password: 'testpass' });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  });
});