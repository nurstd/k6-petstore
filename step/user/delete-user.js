import http from 'k6/http';
import env from '../../data/env.js';
import { endpoint } from '../../data/endpoint.js';

export function deleteUser(data) {
  const username = data.username
  const url = `${env.BASE_URL}${endpoint.v2.user}/${data.username}`;

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return http.del(url);
}
