// utils -> lorem.ts

import { randint } from "./helper.ts";

const WordDict =
  "a ac accumsan adipiscing aenean aliqua aliquam aliquet amet arcu at auctor augue bibendum blandit commodo condimentum consectetur consequat convallis cras cum curabitur cursus dapibus diam dictum dictumst dignissim dis do dolor dolore donec dui duis egestas eget eiusmod elementum elit enim erat eros est et etiam eu euismod facilisis faucibus felis fermentum feugiat fringilla gravida habitant habitasse hac hendrerit iaculis id imperdiet in incididunt integer ipsum justo labore lacinia lacus laoreet lectus leo libero lobortis lorem magna magnis massa mattis mauris mi molestie montes morbi mus nam nascetur natoque nec neque netus nibh nisi nisl non nulla nullam nunc odio orci ornare parturient pellentesque penatibus pharetra phasellus placerat platea porta porttitor praesent pretium proin pulvinar purus quam quis quisque ridiculus risus sagittis scelerisque sed sem semper senectus sit sociis sodales sollicitudin suscipit suspendisse tellus tempor tempus tincidunt tortor tristique turpis ullamcorper ultrices ultricies urna ut varius vel velit venenatis vestibulum vitae viverra volutpat"
    .split(" ");

const WordDictSize = WordDict.length;

export const generate = (min: number = 2, max: number = 24): string => {
  const size: number = randint(min, max);
  const words: string[] = [];

  while (words.length < size) {
    const r = randint(0, WordDictSize);
    const w = WordDict[r];
    if (w && !words.includes(w)) {
      words.push(w);
    }
  }

  return words.join(" ");
};
