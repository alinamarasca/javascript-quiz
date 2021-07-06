// import { inputGreeting } from "../../shared/input-greeting.js";
import { restartButton } from "../../shared/restart-btn.js";
import { renderQuiz } from "./render-quiz.js";

/**
 * The quiz page.
 *
 * @returns {HTMLDivElement} A rendered quiz page.
 */
export const quiz = () => {
  const container = document.createElement("div");
  container.className = "body";

  container.appendChild(renderQuiz(0));
  container.appendChild(restartButton());
  // container.appendChild(inputGreeting());

  return container;
};
