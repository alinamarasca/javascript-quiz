import { state } from "../../../init/state.js";
export const n_questions = () => {
  const numberOfQuestions = state.questions.length;
  const p = document.createElement("p");
  p.innerText = ` The test contains ${numberOfQuestions} questions`;
  return p;
};
