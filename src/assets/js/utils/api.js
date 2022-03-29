export const BASE_URL = 'https://api.github.com';

export function GET_USER(user) {
  return {
    url: `${BASE_URL}/users/${user}`,
    options: {
      method: 'GET',
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      }
    }
  }
}

export function GET_REPOS(user) {
  return {
    url: `${BASE_URL}/users/${user}/repos`,
    options: {
      method: 'GET',
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      }
    }
  }
}

export function GET_STARRED(user) {
  return {
    url: `${BASE_URL}/users/${user}/starred`,
    options: {
      method: 'GET',
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      }
    }
  }
}