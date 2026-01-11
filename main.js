export const generateText = () => {
  return 'this is working or not';
}

export const evaluateTypingTest = async(sentence) => {
  const decoder = new TextDecoder();
  const reader = Deno.stdin.readable.getReader();
  let index = 0;
  while (index < sentence.length) {
    const {value,done} = await reader.read();
    if (decoder.decode(value) === sentence[index]) {
      console.log(sentence[index]);
      
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