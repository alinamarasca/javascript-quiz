import { RestartButton } from "../../shared/restart-btn.js";
import { RenderQuiz } from "./render-quiz.js";
import { NextButton } from "./next-btn.js";
import { BackButton } from "./back-btn.js";
import { state } from "../../../init/state.js";
import { Score } from "./score.js";

/**
 * The quiz page.
 *
 * @returns {HTMLDivElement} A rendered quiz page.
 */
export const quiz = () => {
  const bodyContainer = document.createElement("div");
  bodyContainer.className = "body";

  const controlsContainer = document.createElement("section");
  const quizContainer = document.createElement("section");

  quizContainer.id = "quiz-container";
  quizContainer.appendChild(RenderQuiz(state.currentQuestion));
  bodyContainer.appendChild(quizContainer);

  const rerenderQuiz = () => {
    // Update the quiz after next has been clicked.
    const container = document.getElementById("quiz-container");
    container.innerHTML = "";
    container.appendChild(RenderQuiz(state.currentQuestion));
  };
  bodyContainer.appendChild(quizContainer);

  const restartButton = RestartButton(() => {
    bodyContainer.innerHTML = "";
    controlsContainer.appendChild(restartButton); // I don't understand this
    bodyContainer.appendChild(quizContainer);
    bodyContainer.appendChild(controlsContainer);
  });
  controlsContainer.appendChild(BackButton(rerenderQuiz));
  const showScore = () => {
    bodyContainer.innerHTML = "";
    bodyContainer.appendChild(Score());
    bodyContainer.appendChild(restartButton);
  };
  controlsContainer.appendChild(NextButton(rerenderQuiz, showScore));
  controlsContainer.appendChild(restartButton);

  bodyContainer.appendChild(controlsContainer);

  return bodyContainer;
};
