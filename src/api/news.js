const KEY = 'c76a3a8ef15c457cb5e909068bad444b';

const baseURL = (path) => {
  const url = new URL('https://newsapi.org');
  url.pathname = path;
  url.searchParams.set('apiKey', KEY);
  return url;
};

export const fetchTopHeadlines = (country) => {
  const url = baseURL('/v2/top-headlines');
  url.searchParams.set('country', country);
  return fetch(url.href).then((res) => res.json());
};

export const fetchFromKeywords = (keyword) => {
  const url = baseURL('/v2/everything');
  url.searchParams.set('q', keyword);
  return fetch(url.href).then((res) => res.json());
};
