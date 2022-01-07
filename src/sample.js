// samples

export let nouns = ['alligator', 'ant', 'bear', 'bee', 'bird', 'camel', 'cat', 'cheetah', 'chicken', 'chimpanzee', 'cow', 'crocodile', 'deer', 'dog', 'dolphin', 'duck', 'eagle', 'elephant', 'fish', 'fly', 'fox', 'frog', 'giraffe', 'goat', 'goldfish', 'hamster', 'hippopotamus', 'horse', 'kangaroo', 'kitten', 'lion', 'lobster', 'monkey', 'octopus', 'owl', 'panda', 'pig', 'puppy', 'rabbit', 'rat', 'scorpion', 'seal', 'shark', 'sheep', 'snail', 'snake', 'spider', 'squirrel', 'tiger', 'turtle', 'wolf', 'zebra', 'apple', 'apricot', 'banana', 'blackberry', 'blueberry', 'cherry', 'cranberry', 'currant', 'fig', 'grape', 'grapefruit', 'grapes', 'kiwi', 'kumquat', 'lemon', 'lime', 'melon', 'nectarine', 'orange', 'peach', 'pear', 'persimmon', 'pineapple', 'plum', 'pomegranate', 'prune', 'raspberry', 'strawberry', 'tangerine', 'watermelon']
export let adjectives = ['adaptable', 'adventurous', 'affable', 'affectionate', 'agreeable', 'alert', 'alluring', 'ambitious', 'ambitious', 'amiable', 'amicable', 'amused', 'amusing', 'boundless', 'brave', 'brave', 'bright', 'bright', 'broad-minded', 'calm', 'calm', 'capable', 'careful', 'charming', 'charming', 'cheerful', 'coherent', 'comfortable', 'communicative', 'compassionate', 'confident', 'conscientious', 'considerate', 'convivial', 'cooperative', 'courageous', 'courageous', 'courteous', 'creative', 'credible', 'cultured', 'dashing', 'dazzling', 'debonair', 'decisive', 'decisive', 'decorous', 'delightful', 'detailed', 'determined', 'determined', 'diligent', 'diligent', 'diplomatic', 'discreet', 'discreet', 'dynamic', 'dynamic', 'eager', 'easygoing', 'efficient', 'elated', 'eminent', 'emotional', 'enchanting', 'encouraging', 'endurable', 'energetic', 'energetic', 'entertaining', 'enthusiastic', 'enthusiastic', 'excellent', 'excited', 'exclusive', 'exuberant', 'exuberant', 'fabulous', 'fair', 'fair-minded', 'faithful', 'faithful', 'fantastic', 'fearless', 'fearless', 'fine', 'forceful', 'frank', 'frank', 'friendly', 'friendly', 'funny', 'funny', 'generous', 'generous', 'gentle', 'gentle', 'glorious', 'good', 'good', 'gregarious', 'happy', 'hard-working', 'harmonious', 'helpful', 'helpful', 'hilarious', 'honest', 'honorable', 'humorous', 'imaginative', 'impartial', 'impartial', 'independent', 'industrious', 'instinctive', 'intellectual', 'intelligent', 'intuitive', 'inventive', 'jolly', 'joyous', 'kind', 'kind', 'kind-hearted', 'knowledgeable', 'level', 'likeable', 'lively', 'lovely', 'loving', 'loving', 'loyal', 'lucky', 'mature', 'modern', 'modest', 'neat', 'nice', 'nice', 'obedient', 'optimistic', 'painstaking', 'passionate', 'patient', 'peaceful', 'perfect', 'persistent', 'philosophical', 'pioneering', 'placid', 'placid', 'plausible', 'pleasant', 'plucky', 'plucky', 'polite', 'powerful', 'practical', 'pro-active', 'productive', 'protective', 'proud', 'punctual', 'quick-witted', 'quiet', 'quiet', 'rational', 'receptive', 'reflective', 'reliable', 'relieved', 'reserved', 'resolute', 'resourceful', 'responsible', 'rhetorical', 'righteous', 'romantic', 'romantic', 'sedate', 'seemly', 'selective', 'self-assured', 'self-confident', 'self-disciplined', 'sensible', 'sensitive', 'sensitive', 'shrewd', 'shy', 'silly', 'sincere', 'sincere', 'skillful', 'smiling', 'sociable', 'splendid', 'steadfast', 'stimulating', 'straightforward', 'successful', 'succinct', 'sympathetic', 'talented', 'thoughtful', 'thoughtful', 'thrifty', 'tidy', 'tough', 'tough', 'trustworthy', 'unassuming', 'unbiased', 'understanding', 'unusual', 'upbeat', 'versatile', 'vigorous', 'vivacious', 'warm', 'warmhearted', 'willing', 'willing', 'wise', 'witty', 'witty', 'wonderful']

export const vowels = [
  'a', 'e', 'i', 'o', 'u', 'y'
]

export let sentenceTemplates = [
  'however, {{nouns}} have begun to rent {{nouns}} over the past few months, specifically for {{nouns}} associated with their {{nouns}}'
]

export const phrases = [
  'to be more specific, ',
  'in recent years, ',
  'however, ',
  'by the way',
  'of course, ',
  'some assert that ',
  'if this was somewhat unclear, ',
  'unfortunately, that is wrong; on the contrary, ',
  'it\'s very tricky, if not impossible, ',
  'this could be, or perhaps ',
  'this is not to discredit the idea that ',
  'we know that ',
  'it\'s an undeniable fact, really; ',
  'framed in a different way, ',
  'what we don\'t know for sure is whether or not ',
  'as far as we can estimate, ',
  'as far as he is concerned, ',
  'the zeitgeist contends that ',
  'though we assume the latter, ',
  'far from the truth, ',
  'extending this logic, ',
  'nowhere is it disputed that ',
  'in modern times ',
  'in ancient times ',
  'recent controversy aside, ',
  'washing and polishing the car,',
  'having been a gymnast, ',
  'after a long day at school and work, ',
  'waking to the buzz of the alarm clock, ',
  'draped neatly on a hanger, ',
  'shouting with happiness, '
]

const mergeArray = (a = [], b = []) => {
  return [...new Set([...a, ...b])]
}

export const addNouns = (ls = []) => {
  nouns = mergeArray(nouns, ls)
  return nouns.length
}

export const addAdjectives = (ls = []) => {
  adjectives = mergeArray(adjectives, ls)
  return adjectives.length
}

export const addTemplates = (ls = []) => {
  sentenceTemplates = mergeArray(sentenceTemplates, ls)
  return sentenceTemplates.length
}

export const setNouns = (ls = []) => {
  nouns = [...new Set([...ls])]
  return nouns.length
}

export const setAdjectives = (ls = []) => {
  adjectives = [...new Set([...ls])]
  return adjectives.length
}

export const setTemplates = (ls = []) => {
  sentenceTemplates = [...new Set([...ls])]
  return sentenceTemplates.length
}

export const getNouns = () => {
  return [...nouns]
}

export const getAdjectives = () => {
  return [...adjectives]
}

export const getTemplates = () => {
  return [...sentenceTemplates]
}
