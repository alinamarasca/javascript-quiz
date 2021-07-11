import { backQuestionButton } from "../../../handlers/back-question-btn.js";

export const BackButton = (rerenderQuiz) => {
  const button = document.createElement("BUTTON");
  button.innerText = "back";
  button.classList = "back-btn";
  button.addEventListener("click", () => {
    backQuestionButton(rerenderQuiz);
  });
  return button;
};
