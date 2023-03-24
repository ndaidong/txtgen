// main

import {
  sentenceTemplates,
  phrases
} from './sample.js'

import {
  setRandom,
  randfloat,
  randint,
  rand,
  pickLastPunc,
  generator
} from './util.js'

export {
  generate as lorem
} from './lorem.js'

export {
  addNouns,
  addAdjectives,
  addTemplates,
  setNouns,
  setAdjectives,
  setTemplates,
  getNouns,
  getAdjectives,
  getTemplates
} from './sample.js'

const actions = [
  'noun', 'a_noun', 'nouns',
  'adjective', 'an_adjective',
]

const trim = (s) => {
  return s.replace(/^[\s\xa0]+|[\s\xa0]+$/g, '')
    .replace(/\r?\n|\r/g, ' ')
    .replace(/\s\s+|\r/g, ' ')
}

const make = (template) => {
  let sentence = template
  const occurrences = template.match(/\{\{(.+?)\}\}/g)

  if (occurrences && occurrences.length) {
    for (let i = 0; i < occurrences.length; i++) {
      const action = trim(occurrences[i].replace('{{', '').replace('}}', ''))
      let result
      if (actions.includes(action)) {
        result = generator[action]()
      }
      sentence = sentence.replace(occurrences[i], result)
    }
  }
  return sentence
}

const randomStartingPhrase = () => {
  if (randfloat() < 0.33) {
    return rand(phrases)
  }
  return ''
}

const makeSentenceFromTemplate = () => {
  return make(rand(sentenceTemplates))
}

export {
  setRandom
}

export const sentence = (ignoreStartingPhrase = false) => {
  const phrase = ignoreStartingPhrase ? '' : randomStartingPhrase()
  let s = phrase + makeSentenceFromTemplate()
  s = s.charAt(0).toUpperCase() + s.slice(1)
  s += pickLastPunc()
  return s
}

export const paragraph = (len = 0) => {
  if (!len) {
    len = randint(3, 10)
  }
  const t = Math.min(len, 15)
  const a = []
  while (a.length < t) {
    const s = sentence()
    a.push(s)
  }
  return a.join(' ')
}

export const article = (len = 0) => {
  if (!len) {
    len = randint(3, 10)
  }
  const t = Math.min(len, 15)
  const a = []
  while (a.length < t) {
    const s = paragraph()
    a.push(s)
  }
  return a.join('\n\n')
}
