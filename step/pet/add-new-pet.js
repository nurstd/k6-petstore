import http from 'k6/http';
import env from '../../data/env.js';
import { endpoint } from '../../data/endpoint.js';

export function addNewPet() {
  const url = `${env.BASE_URL}${endpoint.v2.pet}`;
  const payload = JSON.stringify({
    id: 91934043,
    name: "doggie",
    photoUrls: [
      "aliqua nisi",
      "ad sit"],
    category: {
      id: -15983447,
      name: "Excepteur consequat"
    },
    tags: [{
      "id": 3807906,
      "name": "velit nulla reprehenderit voluptate"},
    {
      "id": 72072157,
      "name": "nisi"
    }],
    status: "pending"
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return http.post(url, payload, params);
}
