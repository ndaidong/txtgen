// sample.test

/* eslint-env jest */

import {
  nouns,
  getNouns,
  addNouns,
  setNouns,
  adjectives,
  getAdjectives,
  addAdjectives,
  setAdjectives,
  sentenceTemplates,
  getTemplates,
  addTemplates,
  setTemplates
} from './sample.js'

describe('Test nouns/getNouns', () => {
  test('  test if getNouns() return same as pre-defined nouns', () => {
    const val = getNouns()
    const lastIndex = val.length - 1
    expect(val.length === nouns.length).toBeTruthy()
    expect(val[0] === nouns[0]).toBeTruthy()
    expect(val[9] === nouns[9]).toBeTruthy()
    expect(val[lastIndex] === nouns[lastIndex]).toBeTruthy()
  })
})

describe('Test addNouns/setNouns', () => {
  test('  test if addNouns()/setNouns() affects to pre-defined nouns', () => {
    const preDefined = getNouns()
    setNouns(['one', 'two', 'three'])
    const valAfterSetCall = getNouns()
    expect(valAfterSetCall.length === preDefined.length).toBeFalsy()
    expect(valAfterSetCall.length === 3).toBeTruthy()
    expect(valAfterSetCall[1]).toEqual('two')

    addNouns(['four', 'five', 'six'])
    const valAfterAddCall = getNouns()
    expect(valAfterAddCall.length > valAfterSetCall.length).toBeTruthy()
    expect(valAfterAddCall.includes('four')).toBeTruthy()
    expect(valAfterAddCall.includes('six')).toBeTruthy()
  })
})

describe('Test adjectives/getAdjectives', () => {
  test('  test if getAdjectives() return same as pre-defined adjectives', () => {
    const val = getAdjectives()
    const lastIndex = val.length - 1
    expect(val.length === adjectives.length).toBeTruthy()
    expect(val[0] === adjectives[0]).toBeTruthy()
    expect(val[9] === adjectives[9]).toBeTruthy()
    expect(val[lastIndex] === adjectives[lastIndex]).toBeTruthy()
  })
})

describe('Test addAdjectives/setAdjectives', () => {
  test('  test if addAdjectives()/setAdjectives() affects to pre-defined adjectives', () => {
    const preDefined = getAdjectives()
    setAdjectives(['black', 'white', 'yellow'])
    const valAfterSetCall = getAdjectives()
    expect(valAfterSetCall.length === preDefined.length).toBeFalsy()
    expect(valAfterSetCall.length === 3).toBeTruthy()
    expect(valAfterSetCall[1]).toEqual('white')

    addAdjectives(['blue', 'red', 'green'])
    const valAfterAddCall = getAdjectives()
    expect(valAfterAddCall.length > valAfterSetCall.length).toBeTruthy()
    expect(valAfterAddCall.includes('blue')).toBeTruthy()
    expect(valAfterAddCall.includes('green')).toBeTruthy()
  })
})

describe('Test sentenceTemplates/getTemplates', () => {
  test('  test if getTemplates() return same as pre-defined sentenceTemplates', () => {
    const val = getTemplates()
    const lastIndex = val.length - 1
    expect(val.length === sentenceTemplates.length).toBeTruthy()
    expect(val[0] === sentenceTemplates[0]).toBeTruthy()
    expect(val[9] === sentenceTemplates[9]).toBeTruthy()
    expect(val[lastIndex] === sentenceTemplates[lastIndex]).toBeTruthy()
  })
})

describe('Test addTemplates/setTemplates', () => {
  test('  test if addTemplates()/setTemplates() affects to pre-defined sentenceTemplates', () => {
    const preDefined = getTemplates()
    setTemplates(['first sentence template', 'second sentence template', 'third sentence template'])
    const valAfterSetCall = getTemplates()
    expect(valAfterSetCall.length === preDefined.length).toBeFalsy()
    expect(valAfterSetCall.length === 3).toBeTruthy()
    expect(valAfterSetCall[1]).toEqual('second sentence template')

    addTemplates(['fourth sentence template', 'fifth sentence template', 'sixth sentence template'])
    const valAfterAddCall = getTemplates()
    expect(valAfterAddCall.length > valAfterSetCall.length).toBeTruthy()
    expect(valAfterAddCall.includes('fourth sentence template')).toBeTruthy()
    expect(valAfterAddCall.includes('sixth sentence template')).toBeTruthy()
  })
})
