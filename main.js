const generateText = () => {
  return `The quick brown fox jumps over the lazy dog while the sun slowly sets behind the hills. People often forget how small habits, practiced every day, can lead to meaningful change over time. Typing accurately requires patience, focus, and consistency, but with regular practice, speed and confidence naturally improve`;
};

const color = (char) => "\x1b[2m" + char + "\x1b[0m";

const formatSentence = (sentence, index) =>
  color(sentence.slice(0, index + 1)) +
  sentence[index + 1] + color(sentence.slice(index + 2, index + 30));

const evaluateTypingTest = async (sentence) => {
  const decoder = new TextDecoder();
  const reader = Deno.stdin.readable.getReader();
  let index = 0;
  while (index < sentence.length) {
    const { value, done } = await reader.read();
    if (decoder.decode(value) === sentence[index]) {
      console.clear();
      console.log(formatSentence(sentence, index));
      index++;
    }
  }
};

const main = () => {
  const sentence = generateText();
  console.log(sentence);
  Deno.stdin.setRaw(true, { cbreak: true });
  evaluateTypingTest(sentence);
};

main();
