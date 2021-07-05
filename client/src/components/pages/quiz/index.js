import { inputGreeting } from "../../shared/input-greeting.js";
import { restartButton } from "../../shared/restart-btn.js";
import { nextQuestionButton } from "../../quiz/next-btn.js";
/**
 * The quiz page.
 *
 * @returns {HTMLDivElement} A rendered quiz page.
 */
export const quiz = () => {
  const container = document.createElement("div");
  container.className = "body";
  
  container.appendChild(nextQuestionButton());
  container.appendChild(restartButton());
  container.appendChild(inputGreeting());

  return container;
};
