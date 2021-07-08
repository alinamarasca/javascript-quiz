import { nextQuestionButton } from "../../../handlers/next-question-btn.js";

export const NextButton = () => {
  const button = document.createElement("BUTTON");
  button.innerText = "next";
  button.classList = "next-btn";
  button.addEventListener("click", nextQuestionButton);
  return button;
};
