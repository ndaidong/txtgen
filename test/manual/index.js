
/* eslint no-console: 0 */

'use strict';

var Promise = require('../../src/Promise');

var fakeAsyncRead = (text, callback) => {
  setTimeout(() => {
    if (!text) {
      return callback(new Error('Expected a string'), null);
    }
    return callback(null, text);
  }, 100 + Math.random() * 300);
};

var fakePromiseRead = (text) => {
  return new Promise((resolve, reject) => {
    return fakeAsyncRead(text, (err, content) => {
      if (err) {
        return reject(err);
      }
      return resolve(content);
    });
  });
};

fakePromiseRead('Hello world').then((a) => {
  a += '\nI like Promise';
  return a;
}).then((b) => {
  b += '\nI need finally';
  return b;
}).then((c) => {
  console.log(c);
}).catch((err) => {
  console.log(err);
}).finally(() => {
  console.log('Done');
});

Promise.all([
  fakePromiseRead('One'),
  fakePromiseRead('Two'),
  fakePromiseRead('Three'),
  fakePromiseRead('Four'),
  fakePromiseRead('Five'),
  fakePromiseRead('Six'),
  fakePromiseRead('Seven'),
  fakePromiseRead('Eight'),
  fakePromiseRead('Nine'),
  fakePromiseRead('Ten')
]).then((results) => {
  console.log('Promise.all result:');
  console.log(results.join(' '));
}).catch((err) => {
  console.log('Promise.all result (error):');
  console.log(err);
}).finally(() => {
  console.log('Promise.all: Done');
});

var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([ p1, p2, p3 ]).then((values) => {
  console.log(values); // [3, 1337, "foo"]
});

let arr = [];
Promise.series([
  (next) => {
    let t = 'One';
    fakeAsyncRead(t, (err, content) => {
      if (!err && content) {
        arr.push(content);
      }
      next(err, content);
    });
  },
  (next) => {
    let t = 'Two';
    fakeAsyncRead(t, (err, content) => {
      if (!err && content) {
        arr.push(content);
      }
      next(err, content);
    });
  },
  (next) => {
    let t = 'Three';
    fakeAsyncRead(t, (err, content) => {
      if (!err && content) {
        arr.push(content);
      }
      next(err, content);
    });
  },
  (next) => {
    let t = 'Four';
    fakeAsyncRead(t, (err, content) => {
      if (!err && content) {
        arr.push(content);
      }
      next(err, content);
    });
  },
  (next) => {
    let t = 'Five';
    fakeAsyncRead(t, (err, content) => {
      if (!err && content) {
        arr.push(content);
      }
      next(err, content);
    });
  },
  (next) => {
    let t = 'Six';
    fakeAsyncRead(t, (err, content) => {
      if (!err && content) {
        arr.push(content);
      }
      next(err, content);
    });
  },
  (next) => {
    let t = 'Seven';
    fakeAsyncRead(t, (err, content) => {
      if (!err && content) {
        arr.push(content);
      }
      next(err, content);
    });
  },
  (next) => {
    let t = null;
    fakeAsyncRead(t, (err, content) => {
      if (!err && content) {
        arr.push(content);
      }
      next(err, content);
    });
  },
  (next) => {
    let t = 'Nine';
    fakeAsyncRead(t, (err, content) => {
      if (!err && content) {
        arr.push(content);
      }
      next(err, content);
    });
  },
  (next) => {
    let t = 'Ten';
    fakeAsyncRead(t, (err, content) => {
      if (!err && content) {
        arr.push(content);
      }
      next(err, content);
    });
  }
]).then(() => {
  console.log('Promise.series result:');
  let s = arr.join(' ');
  console.log(s);
}).catch((err) => {
  console.log('Promise.series result (error):');
  console.log(err);
}).finally(() => {
  console.log('Promise.series: Done');
});
