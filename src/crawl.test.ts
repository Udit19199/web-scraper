import { expect, test } from 'vitest'
import { normalizeURL } from './crawl'

test('Normalize URL', () => {
  expect(normalizeURL("https://blog.boot.dev/path/")).toBe("blog.boot.dev/path")
  expect(normalizeURL("https://blog.boot.dev/path")).toBe("blog.boot.dev/path")
  expect(normalizeURL("http://blog.boot.dev/path/")).toBe("blog.boot.dev/path")
  expect(normalizeURL("http://blog.boot.dev/path")).toBe("blog.boot.dev/path")
})
