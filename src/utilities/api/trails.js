import sendRequest from '../send-request';
const BASE_URL = '/api/trails';

export function getAll() {
  return sendRequest(BASE_URL);
}
export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function create(trailData) {
  return sendRequest(BASE_URL, 'POST', trailData);
}

export function update(id, trailData) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', trailData);
}