// main.test

/* eslint-env jest */

import {
  sentence,
  paragraph,
  article
} from './main.js'

const LIMIT = 30

describe('Test exported methods', () => {
  test('  test if .sentence() works correctly', () => {
    for (let i = 0; i < LIMIT; i++) {
      const val = sentence()
      expect(val.split(' ').length).toBeGreaterThan(3)
    }
  })
  test('  test if .paragraph() works correctly', () => {
    for (let i = 0; i < LIMIT; i++) {
      const val = paragraph(5)
      expect(val.split(' ').length).toBeGreaterThan(10)
      expect(val.split('.').length).toBeGreaterThanOrEqual(1)
    }
  })
  test('  test if .article() works correctly', () => {
    for (let i = 0; i < LIMIT; i++) {
      const val = article(5)
      expect(val.split(' ').length).toBeGreaterThan(10)
      expect(val.split('.').length).toBeGreaterThan(1)
      expect(val.split('\n\n').length).toBeGreaterThanOrEqual(1)

      const art = article()
      expect(art.split('\n\n').length).toBeGreaterThan(2)
    }
  })
})
