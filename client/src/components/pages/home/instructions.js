/* eslint-disable prettier/prettier */
/* eslint-disable camelcase */
/* eslint-disable prettier/prettier */
import { n_questions } from "./n_questions.js";

export const makeInstructions = () => {
  const p = n_questions();
  const count = p.innerText;

  const instructions = document.createElement("SECTION");
  instructions.classList = "instructions";
  const textTitle = document.createElement("H2");
  instructions.appendChild(textTitle);
  textTitle.innerText = "Instructions:";
  const paragraph = document.createElement("P");
  instructions.appendChild(paragraph);
  paragraph.innerText = `You will get 1 point for each correct answer.
  ${count}.
  At the end of the Quiz, your total score will be displayed.
  Keep in mind multiple choice is possible.
  There is no time limit. You can restart and do the test as many times as you want.
  Good luck!`;
  return instructions;
};
