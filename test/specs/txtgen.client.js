/**
 * Testing
 * @ndaidong
 */

/* global txtgen */

describe('Testing txtgen APIs', () => {
  describe('General', () => {
    const keys = [
      'sentence',
      'paragraph',
      'article',
      'addNouns',
      'addAdjectives',
      'addTemplates',
    ];

    const check = (k) => {
      it(`txtgen.${k} must be defined`, () => {
        expect(txtgen[k]).toBeDefined();
      });
    };

    keys.map(check);
  });

  describe('txtgen.sentence()', () => {
    const d = txtgen.sentence();
    it('A sentence must be created', () => {
      expect(d).toBeDefined();
      expect(d.length).toBeGreaterThan(0);
    });

    const a = [];
    while (a.length < 1000) {
      const c = txtgen.sentence();
      a.push(c);
    }

    it('1000 sentences must be created', () => {
      expect(a).toBeDefined();
      expect(a.length).toBe(1000);
    });
  });

  describe('txtgen.paragraph()', () => {
    const d = txtgen.paragraph();
    it('A paragraph must be created', () => {
      expect(d).toBeDefined();
      expect(d.length).toBeGreaterThan(0);
    });
  });

  describe('txtgen.article()', () => {
    const d = txtgen.article();
    it('An article must be created', () => {
      expect(d).toBeDefined();
      expect(d.length).toBeGreaterThan(0);
    });
  });

  describe('txtgen.addNouns()', () => {
    const d = txtgen.addNouns(['a', 'b', 'c']);
    it('After adding 3 items => 85 nouns', () => {
      expect(d).toBe(85);
    });
  });

  describe('txtgen.addAdjectives()', () => {
    const d = txtgen.addAdjectives(['a', 'b', 'c', 'd']);
    it('After adding 4 items => 195 adjectives', () => {
      expect(d).toBe(195);
    });
  });

  describe('txtgen.addTemplates()', () => {
    const d = txtgen.addTemplates(['a', 'b', 'c']);
    it('After adding 3 items => 32 adjectives', () => {
      expect(d).toBe(32);
    });
  });
});
