/**
 * Testing
 * @ndaidong
 */

/* global txtgen */

'use strict';

describe('Testing txtgen APIs', () => {
  describe('General', () => {

    let keys = [
      'make'
    ];

    let check = (k) => {
      it(`txtgen.${k} must be defined`, () => {
        expect(txtgen[k]).toBeDefined();
      });
    };

    keys.map(check);
  });

  describe('txtgen.make()', () => {

    let d = txtgen.make();
    it('A sentence must be created', () => {
      expect(d).toBeDefined();
      expect(d.length).toBeGreaterThan(0);
    });

    let a = [];
    while (a.length < 1000) {
      let c = txtgen.make();
      a.push(c);
    }

    it('1000 sentences must be created', () => {
      expect(a).toBeDefined();
      expect(a.length).toBe(1000);
    });
  });
});
