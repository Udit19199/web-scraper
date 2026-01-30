import { URL } from 'node:url';

export function normalizeURL(url: string) {
  const u = new URL(url);
  let pathname = u.pathname;
  if (pathname.endsWith('/')) {
    pathname = pathname.slice(0, -1)
  }
  const normalizedURL = u.hostname + pathname;
  return normalizedURL;
}



