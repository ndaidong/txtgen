'use strict';

var fs = require('fs');
var exec = require('child_process').execSync;
var request = require('request');
var colors = require('colors');

const API = 'https://closure-compiler.appspot.com/compile';

const LEVEL = 'SIMPLE_OPTIMIZATIONS';
const INFO = [ 'compiled_code', 'warnings', 'errors' ];
const OUTPUT = 'json';

const SOURCE = './src/';
const DIST = './dist/';

var send = (source) => {
  return new Promise((resolve, reject) => {
    let info = '';
    let arr = [];
    INFO.forEach((item) => {
      arr.push(`output_info=${item}`);
    });
    info = arr.join('&');
    let target = `
      ${API}?compilation_level=${LEVEL}&output_format=${OUTPUT}&${info}
    `;
    let data = {
      'js_code': source,
      language: 'ECMASCRIPT6'
    };

    return request.post(target, { form: data }, (err, response, body) => {
      if (err) {
        return reject(err);
      }
      try {
        let o = JSON.parse(body);
        if (!o) {
          return reject(new Error('Invalid JSON format'));
        }
        return resolve(o);
      } catch (e) {
        return reject(e);
      }
    });
  });
};

var log = {
  error: (msg) => {
    console.log(colors.red(msg)); // eslint-disable-line
  },
  warn: (msg) => {
    console.log(colors.yellow(msg)); // eslint-disable-line
  },
  success: (msg) => {
    console.log(colors.green(msg)); // eslint-disable-line
  }
};

var minify = () => {
  let file = SOURCE + 'vdom.js';
  let s = fs.readFileSync(file);
  send(s).then((json) => {
    if (json.errors) {
      log.error(json.errors);
    } else if (json.warnings) {
      log.warn(json.warnings);
    } else {
      exec('rm -rf ' + DIST);
      exec('mkdir ' + DIST);
      let fileOut = DIST + 'vdom.min.js';

      let code = json.compiledCode;
      fs.writeFileSync(fileOut, code, 'utf8');
      log.success('File has been minified');
    }
  }).catch((err) => {
    log.error(err);
  });
};

minify();
