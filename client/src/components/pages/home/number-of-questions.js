import { state } from "../../../init/state.js";

export const numberOfQuestions = () => {
  const number = state.questions.length;
  const p = document.createElement("p");
  p.innerText = ` The test contains ${number} questions`;
  return p;
};
