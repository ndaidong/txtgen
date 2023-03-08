// eval.js
// remove type=`module` from package.json first

const {
  sentence,
} = require('./dist/cjs/txtgen.js')

console.log('sentence() // => ', sentence())
