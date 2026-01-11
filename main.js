import { evaluateTypingTest } from "./src/evaluate_typing_test.js";
import { generateText } from "./src/generate_random_text.js";
import { generateReport } from "./src/generate_report.js";

const main = async () => {
  const text = generateText();
  console.log(text);
  Deno.stdin.setRaw(true, { cbreak: true });
  const time = 10;
  const [index, attempts] = await evaluateTypingTest(text,time);
  generateReport(text,index,time, attempts);
};

main();
