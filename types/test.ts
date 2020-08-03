import * as txtgen from 'txtgen';

txtgen.sentence(); // $ExpectType string
txtgen.paragraph(); // $ExpectType string
txtgen.paragraph(1); // $ExpectType string
txtgen.article(); // $ExpectType string
txtgen.article(1); // $ExpectType string

txtgen.addNouns(); // $ExpectType number
txtgen.addNouns(['n1', 'n2']); // $ExpectType number
txtgen.addAdjectives(); // $ExpectType number
txtgen.addAdjectives(['adj1', 'adj2']); // $ExpectType number
txtgen.addTemplates(); // $ExpectType number
txtgen.addTemplates(['tml1', 'tml2']); // $ExpectType number

txtgen.setNouns(); // $ExpectType number
txtgen.setNouns(['n1', 'n2']); // $ExpectType number
txtgen.setAdjectives(); // $ExpectType number
txtgen.setAdjectives(['adj1', 'adj2']); // $ExpectType number
txtgen.setTemplates(); // $ExpectType number
txtgen.setTemplates(['tml1', 'tml2']); // $ExpectType number

txtgen.getNouns(); // $ExpectType string[]
txtgen.getAdjectives(); // $ExpectType string[]
txtgen.getTemplates(); // $ExpectType string[]
