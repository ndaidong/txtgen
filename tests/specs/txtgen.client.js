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


  describe('txtgen.setNouns() and txtgen.getNouns()', () => {
    const samples = ['a', 'b', 'c'];
    const d = txtgen.setNouns(samples);
    it('With 3 items set to nouns, now total must be 3', () => {
      expect(d).toEqual(3);
    });
    const curr = txtgen.getNouns();
    it('Nouns sample now must be exactly what we have set', () => {
      expect(curr).toEqual(samples);
    });
  });

  describe('txtgen.addAdjectives()', () => {
    const d = txtgen.addAdjectives(['a', 'b', 'c', 'd']);
    it('After adding 4 items => 195 adjectives', () => {
      expect(d).toBe(195);
    });
  });

  describe('txtgen.setAdjectives() and txtgen.getAdjectives()', () => {
    const samples = ['a', 'b', 'c'];
    const d = txtgen.setAdjectives(samples);
    it('With 3 items set to adjectives, now total must be 3', () => {
      expect(d).toEqual(3);
    });
    const curr = txtgen.getAdjectives();
    it('Adjectives sample now must be exactly what we have set', () => {
      expect(curr).toEqual(samples);
    });
  });

  describe('txtgen.addTemplates()', () => {
    const d = txtgen.addTemplates(['a', 'b', 'c']);
    it('After adding 3 items => 32 templates', () => {
      expect(d).toBe(32);
    });
  });

  describe('txtgen.setTemplates() and txtgen.getTemplates()', () => {
    const samples = ['a', 'b', 'c'];
    const d = txtgen.setTemplates(samples);
    it('With 3 items set to templates, now total must be 3', () => {
      expect(d).toEqual(3);
    });
    const curr = txtgen.getTemplates();
    it('Template sample now must be exactly what we have set', () => {
      expect(curr).toEqual(samples);
    });
  });
});

// txtgen.setTemplates([]);
console.log(txtgen.getTemplates());
const sentence2 = txtgen.paragraph(2);
console.log(sentence2);
