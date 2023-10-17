import { getToken } from './services/users'

const DEFAULT_HEADERS = { 'Content-Type': 'application/json' }


export default async function sendRequest(url, method = 'GET', payload = null){
  const options = { method }

  if(payload){
    options.headers = { ...DEFAULT_HEADERS }
    options.body = JSON.stringify(payload)
  }

  const token = getToken();
  if(token){
    options.headers ||= {};
    options.headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(url, options)

  if (res.ok) return res.json()

  if (res.status === 400) {
    const errorResponse = await res.json();
    if (errorResponse && errorResponse.error) {
      throw new Error(errorResponse.error);
    }
  }

  throw new Error('Bad Request')
}