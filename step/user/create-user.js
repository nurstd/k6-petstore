import http from 'k6/http';
import env from '../../data/env.js';
import { endpoint } from '../../data/endpoint.js';

export function createUser() {
  const url = `${env.BASE_URL}${endpoint.v2.user}`;
  const payload = JSON.stringify({
    id        : 123456,
    username  : "usertest",
    firstName : "User",
    lastName  : "Test",
    email     : "user@test.com",
    password  : "12345678",
    phone     : "62123456789",
    userStatus: 1
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return http.post(url, payload, params);
}
