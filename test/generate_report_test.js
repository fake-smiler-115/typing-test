import { assertEquals } from "@std/assert";
import { calculateAccuracy, calculateWPM } from "../src/generate_report.js";

Deno.test("random wpm check", () => {
  const text = "hello good morning everyone";
  assertEquals(calculateWPM(text, 27, 60), 4);
});

Deno.test("index in the middle of the word", () => {
  const text = "hello good morning everyone";
  assertEquals(calculateWPM(text, 25, 60), 4);
});

Deno.test("time is less than 1 minute", () => {
  const text = "hello good morning everyone";
  assertEquals(calculateWPM(text, 25, 10), 24);
});

Deno.test("time is greater than 1 minute", () => {
  const text = "hello good morning everyone";
  assertEquals(calculateWPM(text, 25, 120), 2);
});

Deno.test("single characters typed", () => {
  const text = "hello good morning everyone";
  assertEquals(calculateWPM(text, 1, 120), 1);
});

Deno.test("100% accuracy", () => {
  assertEquals(calculateAccuracy(100,100), 100);
});

Deno.test("0% accuracy", () => {
  assertEquals(calculateAccuracy(0,100), 0);
});

Deno.test("random  accuracy", () => {
  assertEquals(calculateAccuracy(95,100), 95);
});

Deno.test("random  accuracy", () => {
  assertEquals(calculateAccuracy(5,100), 5);
});

Deno.test("floating points while calculate the accuracy", () => {
  assertEquals(calculateAccuracy(5,97), 6);
});