import { state } from "../../../init/state.js";

export const numberOfQuestions = () => {
  const numberOfQuestions = state.questions.length;
  const p = document.createElement("p");
  p.innerText = ` The test contains ${numberOfQuestions} questions`;
  return p;
};
