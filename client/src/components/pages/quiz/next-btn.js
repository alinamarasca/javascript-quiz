import { nextQuestionButton } from "../../../handlers/next-question-btn.js";
<<<<<<< HEAD

export const NextButton = () => {
  const button = document.createElement("BUTTON");
  button.innerText = "next";
  button.classList = "next-btn";
  button.addEventListener("click", nextQuestionButton);
=======
import { state } from "../../../init/state.js";

export const NextButton = (rerenderQuiz, showScore) => {
  const button = document.createElement("BUTTON");
  button.innerText = "next";
  button.classList = "next-btn";
  button.addEventListener("click", () => {
    if (state.questions.length === (state.currentQuestion + 1)) {
      showScore();
    }
    else {
      nextQuestionButton(rerenderQuiz);
    }
  });
>>>>>>> b8a7f24302f1e6ea4683b489d133bc2551526f70
  return button;
};
