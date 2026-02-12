import { URL } from 'node:url';
import { JSDOM } from 'jsdom';

export function normalizeURL(url: string) {
  const u = new URL(url);
  let pathname = u.pathname;
  if (pathname.endsWith('/')) {
    pathname = pathname.slice(0, -1)
  }
  const normalizedURL = u.hostname + pathname;
  return normalizedURL;
}


export function getH1FromHTML(html: string): string {
  let dom = new JSDOM(html);
  let h1Contents = dom.window.document.querySelectorAll("h1");
  return h1Contents[0].textContent;
}

export function getFirstParagraphFromHTML(html: string): string {
  let dom = new JSDOM(html);
  let paragraphContents = dom.window.document.querySelectorAll("p");
  return paragraphContents[0].textContent;
};
