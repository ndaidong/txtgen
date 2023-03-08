// lorem.js

import { randint } from './util.js'

const WordDict = 'a ac accumsan adipiscing aenean aliqua aliquam aliquet amet arcu at auctor augue bibendum blandit commodo condimentum consectetur consequat convallis cras cum curabitur cursus dapibus diam dictum dictumst dignissim dis do dolor dolore donec dui duis egestas eget eiusmod elementum elit enim erat eros est et etiam eu euismod facilisis faucibus felis fermentum feugiat fringilla gravida habitant habitasse hac hendrerit iaculis id imperdiet in incididunt integer ipsum justo labore lacinia lacus laoreet lectus leo libero lobortis lorem magna magnis massa mattis mauris mi molestie montes morbi mus nam nascetur natoque nec neque netus nibh nisi nisl non nulla nullam nunc odio orci ornare parturient pellentesque penatibus pharetra phasellus placerat platea porta porttitor praesent pretium proin pulvinar purus quam quis quisque ridiculus risus sagittis scelerisque sed sem semper senectus sit sociis sodales sollicitudin suscipit suspendisse tellus tempor tempus tincidunt tortor tristique turpis ullamcorper ultrices ultricies urna ut varius vel velit venenatis vestibulum vitae viverra volutpat'.split(' ') // eslint-disable-line

const WordDictSize = WordDict.length

export const generate = (min = 2, max = 24) => {
  const size = randint(min, max)
  const words = []

  while (words.length < size) {
    const r = randint(0, WordDictSize)
    const w = WordDict[r]
    if (w && !words.includes(w)) {
      words.push(w)
    }
  }

  return words.join(' ')
}
