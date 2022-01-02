/**
 * build.js
 * @ndaidong
**/

import { readFileSync, writeFileSync } from 'fs'
import { execSync } from 'child_process'

import { buildSync } from 'esbuild'

const pkg = JSON.parse(readFileSync('./package.json'))

execSync('rm -rf dist')
execSync('mkdir dist')

const buildTime = (new Date()).toISOString()
const longComment = [
  '/**',
  ` * ${pkg.name}@${pkg.version}`,
  ` * built with esbuild at: ${buildTime}`,
  ` * repository: ${pkg.repository.url}`,
  ` * maintainer: ${pkg.author}`,
  ` * License: ${pkg.license}`,
  '**/'
].join('\n')

const shortComment = [
  `// ${pkg.name}@${pkg.version}, by ${pkg.author}`,
  `built with esbuild at ${buildTime}`,
  `published under ${pkg.license} license`
].join(' - ')

const baseOpt = {
  entryPoints: ['src/main.js'],
  bundle: true,
  charset: 'utf8',
  target: ['es2020', 'node14'],
  minify: true,
  write: true
}

const esmVersion = {
  ...baseOpt,
  platform: 'neutral',
  format: 'esm',
  mainFields: ['module'],
  outfile: `dist/${pkg.name}.esm.js`,
  banner: {
    js: longComment
  }
}
buildSync(esmVersion)

const cjsVersion = {
  ...baseOpt,
  platform: 'node',
  format: 'cjs',
  mainFields: ['main'],
  outfile: `dist/cjs/${pkg.name}.js`,
  banner: {
    js: longComment
  }
}
buildSync(cjsVersion)

const cjspkg = {
  name: pkg.name + '-cjs',
  version: pkg.version,
  main: `./${pkg.name}.js`
}
writeFileSync(
  'dist/cjs/package.json',
  JSON.stringify(cjspkg, null, '  '),
  'utf8'
)

const iifeVersion = {
  ...baseOpt,
  platform: 'browser',
  format: 'iife',
  mainFields: ['browser'],
  target: ['es2020'],
  globalName: pkg.name,
  outfile: `dist/${pkg.name}.min.js`,
  banner: {
    js: shortComment
  }
}
buildSync(iifeVersion)
