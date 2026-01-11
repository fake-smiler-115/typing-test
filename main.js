const generateText = () => {
  return 'this is working or not';
}

const color = (char) => '\x1b[2m' + char + '\x1b[0m';

const evaluateTypingTest = async(sentence) => {
  const decoder = new TextDecoder();
  const reader = Deno.stdin.readable.getReader();
  let index = 0;
  while (index < sentence.length) {
    const {value,done} = await reader.read();
    if (decoder.decode(value) === sentence[index]) {
      console.clear();
      console.log(color(sentence.slice(0,index + 1)) + sentence[index + 1] + color(sentence.slice(index + 2)));
      index++;
    }
  }
}

const main = () => {
const sentence = generateText();
console.log(sentence);
Deno.stdin.setRaw(true, {cbreak : true});
evaluateTypingTest(sentence);
}

main()