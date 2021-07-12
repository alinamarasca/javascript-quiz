import { nextQuestionButton } from "../../../handlers/next-question-btn.js";
import { state } from "../../../init/state.js";

export const NextButton = (rerenderQuiz, showScore) => {
  const button = document.createElement("BUTTON");
  button.innerText = "next";
  button.classList = "next-btn";
  button.addEventListener("click", () => {
    if (state.questions.length === state.currentQuestion + 1) {
      showScore();
    } else {
      nextQuestionButton(rerenderQuiz);
    }
  });
  return button;
};
