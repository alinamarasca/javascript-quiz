import { inputGreeting } from "../../shared/input-greeting.js";
import { restartButton } from "../../shared/restart-btn.js";
import { RenderQuiz } from "./render-quiz.js";
import { NextButton } from "./next-btn.js";
import { BackButton } from "./back-btn.js";
import { state } from "../../../init/state.js";

/**
 * The quiz page.
 *
 * @returns {HTMLDivElement} A rendered quiz page.
 */
export const quiz = () => {
  const container = document.createElement("div");
  container.className = "body";

  const quizContainer = document.createElement("section");
  quizContainer.id = "quiz-container";
  quizContainer.appendChild(RenderQuiz(state.currentQuestion));
  container.appendChild(quizContainer);

  const rerenderQuiz = () => {
    // Update the quiz after next has been clicked.
    const container = document.getElementById("quiz-container");
    container.innerHTML = "";
    container.appendChild(RenderQuiz(state.currentQuestion));
  };

  const backButton = BackButton(rerenderQuiz);
  container.appendChild(backButton);

  const nextButton = NextButton(rerenderQuiz);
  container.appendChild(nextButton);

  container.appendChild(restartButton(rerenderQuiz));
  container.appendChild(inputGreeting());

  return container;
};
