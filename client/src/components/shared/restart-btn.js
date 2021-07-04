import { restartQuiz } from "../../handlers/restart-quiz.js";

export const restartButton = () => {
  const button = document.createElement("button");
  button.classList = "restart";
  button.innerText = "Restart";

  button.addEventListener("click", restartQuiz);

  return button;
};
