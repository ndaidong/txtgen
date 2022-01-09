// util.test

/* eslint-env jest */

import {
  nouns,
  adjectives
} from './sample.js'

import {
  normalize,
  generator
} from './util.js'

describe('Test .normalize()', () => {
  test('  test if normalize() works correctly', () => {
    expect(normalize('dog')).toEqual('a dog')
    expect(normalize('car')).toEqual('a car')
    expect(normalize('hour')).toEqual('an hour')
    expect(normalize('egg')).toEqual('an egg')
  })
})

describe('Test generator', () => {
  test('  test if generator works correctly', () => {
    for (let i = 0; i < 100; i++) {
      expect(nouns.includes(generator.noun())).toBeTruthy()
      expect(generator.a_noun().startsWith('a')).toBeTruthy()
      expect(adjectives.includes(generator.adjective())).toBeTruthy()
      expect(generator.an_adjective().startsWith('a')).toBeTruthy()
    }
  })
})
