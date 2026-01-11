const color = (char) => "\x1b[2m" + char + "\x1b[0m";

const formatSentence = (sentence, index) =>
  color(sentence.slice(0, index + 1)) +
  sentence[index + 1] + color(sentence.slice(index + 2, index + 30));

const printTimer = (start) => 120 - (Math.floor( Math.abs(start - Date.now())/ 1000));

export const evaluateTypingTest = async (sentence) => {
  const decoder = new TextDecoder();
  const reader = Deno.stdin.readable.getReader();
  let index = 0;
  let timer = 120;
  const start = Date.now();
  while (timer > 90) { 
    const { value, done } = await reader.read();
    if (decoder.decode(value) === sentence[index]) {
      console.clear();
      timer = printTimer(start);
      console.log('\t\t\t\t\t\t\t\t ' + timer);
      console.log(formatSentence(sentence, index));
      index++;
    }
  }
};