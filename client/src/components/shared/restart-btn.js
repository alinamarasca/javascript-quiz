import { restartQuiz } from "../../handlers/restart-quiz.js";

export const restartButton = (rerenderQuiz) => {
  const button = document.createElement("button");
  button.classList = "restart";
  button.innerText = "Restart";

  button.addEventListener("click", () => {
    restartQuiz(); // update the state and reset
    rerenderQuiz();
  });

  return button;
};
