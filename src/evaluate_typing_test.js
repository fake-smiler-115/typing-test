const semiVisual = (string) => "\x1b[2m" + string + "\x1b[0m";

const visual = (string) => "\x1b[33m" + string + "\x1b[0m"

const formatSentence = (text, index) =>
  visual(text.slice(0, index + 1)) +
  text[index + 1] + semiVisual(text.slice(index + 2, index + 30));

const calaculateTime = (start,time) => time - (Math.floor( Math.abs(start - Date.now())/ 1000));

export const evaluateTypingTest = async (text,time) => {
  const decoder = new TextDecoder();
  const reader = Deno.stdin.readable.getReader();
  let attempts = 0;
  let index = 0;
  let timer = time;
  const start = Date.now();
  while (timer > 0) { 
    const { value, done } = await reader.read();
    attempts++;
    if (decoder.decode(value) !== text[index]) continue;
      console.clear();
      timer = calaculateTime(start,time);
      console.log('\t\t\t\t\t\t\t\t ' + timer);
      console.log(formatSentence(text, index));
      index++;
}

  return [index, attempts];
};