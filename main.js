import { evaluateTypingTest } from "./src/evaluate_typing_test.js";
import { generateText } from "./src/generate_random_text.js";

const main = () => {
  const sentence = generateText();
  console.log(sentence);
  Deno.stdin.setRaw(true, { cbreak: true });
  evaluateTypingTest(sentence);
};

main();
