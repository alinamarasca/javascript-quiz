import { nextQuestionButton } from "../../../handlers/next-question-btn.js";

export const NextButton = (rerenderQuiz) => {
  const button = document.createElement("BUTTON");
  button.innerText = "next";
  button.classList = "next-btn";
  button.addEventListener("click", () => {
    nextQuestionButton(rerenderQuiz);
  });
  return button;
};
