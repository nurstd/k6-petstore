import http from 'k6/http';
import env from '../../data/env.js';
import { endpoint } from '../../data/endpoint.js';

export function createUser(data) {
  const url = `${env.BASE_URL}${endpoint.v2.user}`;
  const payload = JSON.stringify({
    id        : parseInt(data.id),
    username  : data.username,
    firstName : data.firstName,
    lastName  : data.lastName,
    email     : data.email,
    password  : data.password,
    phone     : data.phone,
    userStatus: parseInt(data.userStatus)
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return http.post(url, payload, params);
}
