// import { inputGreeting } from "../../shared/input-greeting.js";
import { restartButton } from "../../shared/restart-btn.js";
import { RenderQuiz } from "./render-quiz.js";
import { NextButton } from "./next-btn.js";
import { data } from "../../../../data/quiz.js";

/**
 * The quiz page.
 *
 * @returns {HTMLDivElement} A rendered quiz page.
 */
export const quiz = () => {
  const container = document.createElement("div");
  container.className = "body";
  container.appendChild(RenderQuiz(data.currentQuestion));
  container.appendChild(NextButton());
  container.appendChild(restartButton());
  // container.appendChild(inputGreeting());
  return container;
};
