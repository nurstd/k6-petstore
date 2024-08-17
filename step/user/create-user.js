import http from 'k6/http';
import env from '../../data/env.js';
import { endpoint } from '../../data/endpoint.js';

export function createUser(payload) {
  const url = `${env.BASE_URL}${endpoint.v2.user}`;
  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return http.post(url, JSON.stringify(payload), params);
}
