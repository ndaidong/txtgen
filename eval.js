// eval.js
// for human test

import {
  sentence,
  paragraph,
  article,
  lorem
} from './src/main.js'

console.log('Generate sentence ')
console.log('-'.repeat(100))
console.log(sentence())
console.log('-'.repeat(100))

console.log('Generate paragraph ')
console.log('+'.repeat(100))
console.log(paragraph())
console.log('+'.repeat(100))

console.log('Generate article ')
console.log('*'.repeat(100))
console.log(article())
console.log('*'.repeat(100))

console.log('Generate lorem sentence ')
console.log('-'.repeat(100))
console.log(lorem())
console.log('-'.repeat(100))
