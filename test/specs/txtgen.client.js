/**
 * Testing
 * @ndaidong
 */

/* global txtgen */

'use strict';

describe('Testing txtgen APIs', () => {
  describe('General', () => {

    let keys = [
      'sentence',
      'phrase',
      'article'
    ];

    let check = (k) => {
      it(`txtgen.${k} must be defined`, () => {
        expect(txtgen[k]).toBeDefined();
      });
    };

    keys.map(check);
  });

  describe('txtgen.sentence()', () => {

    let d = txtgen.sentence();
    it('A sentence must be created', () => {
      expect(d).toBeDefined();
      expect(d.length).toBeGreaterThan(0);
    });

    let a = [];
    while (a.length < 1000) {
      let c = txtgen.sentence();
      a.push(c);
    }

    it('1000 sentences must be created', () => {
      expect(a).toBeDefined();
      expect(a.length).toBe(1000);
    });
  });

  describe('txtgen.phrase()', () => {

    let d = txtgen.phrase();
    it('A phrase must be created', () => {
      expect(d).toBeDefined();
      expect(d.length).toBeGreaterThan(0);
    });

  });

  describe('txtgen.article()', () => {

    let d = txtgen.article();
    it('An article must be created', () => {
      expect(d).toBeDefined();
      expect(d.length).toBeGreaterThan(0);
    });

  });
});
