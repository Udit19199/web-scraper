import { expect, test } from 'vitest'
import { normalizeURL } from './crawl'
import { getH1FromHTML } from './crawl'
import { getFirstParagraphFromHTML } from './crawl'

test('Normalize URL', () => {
  expect(normalizeURL("https://blog.boot.dev/path/")).toBe("blog.boot.dev/path")
  expect(normalizeURL("https://blog.boot.dev/path")).toBe("blog.boot.dev/path")
  expect(normalizeURL("http://blog.boot.dev/path/")).toBe("blog.boot.dev/path")
  expect(normalizeURL("http://blog.boot.dev/path")).toBe("blog.boot.dev/path")
})

test("getH1FromHTML basic", () => {
  const inputBody = `<html><body><h1>Test Title</h1></body></html>`;
  const actual = getH1FromHTML(inputBody);
  const expected = "Test Title";
  expect(actual).toBe(expected);
});


test("getH1FromHTML basic", () => {
  const inputBody = `<html><body><h2><h1>Hello</h1></h2></body></html>`;
  const actual = getH1FromHTML(inputBody);
  const expected = "Hello";
  expect(actual).toEqual(expected);
});


test("getFirstParagraphFromHTML main priority", () => {
  const inputBody = `
    <html><body>
      <p>Main paragraph.</p>
      <main>
        <p>Main paragraph.</p>
      </main>
    </body></html>
  `;
  const actual = getFirstParagraphFromHTML(inputBody);
  const expected = "Main paragraph.";
  expect(actual).toEqual(expected);
});

test("getFirstParagraphFromHTML main priority", () => {
  const inputBody = `
    <html><body>
      <p>Main paragraph.</p>
      <main>
      <h1>
        <p>Main paragraph.</p>
      </h1>
        </main>
    </body></html>
  `;
  const actual = getFirstParagraphFromHTML(inputBody);
  const expected = "Main paragraph.";
  expect(actual).toEqual(expected);
});
