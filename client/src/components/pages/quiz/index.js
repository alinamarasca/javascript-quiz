<<<<<<< HEAD
// import { inputGreeting } from "../../shared/input-greeting.js";
import { restartButton } from "../../shared/restart-btn.js";
import { RenderQuiz } from "./render-quiz.js";
import { NextButton } from "./next-btn.js";
import { data } from "../../../../data/quiz.js";
=======
import { RestartButton } from "../../shared/restart-btn.js";
import { RenderQuiz } from "./render-quiz.js";
import { NextButton } from "./next-btn.js";
import { BackButton } from "./back-btn.js";
import { state } from "../../../init/state.js";
import { Score } from "./score";
>>>>>>> b8a7f24302f1e6ea4683b489d133bc2551526f70

/**
 * The quiz page.
 *
 * @returns {HTMLDivElement} A rendered quiz page.
 */
export const quiz = () => {
  const container = document.createElement("div");
  container.className = "body";
<<<<<<< HEAD
  container.appendChild(RenderQuiz(data.currentQuestion));
  container.appendChild(NextButton());
  container.appendChild(restartButton());
  // container.appendChild(inputGreeting());
=======

  const controlsContainer = document.createElement("section");
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
  container.appendChild(quizContainer);

  const restartButton = RestartButton(() => {
    container.innerHTML = "";
    controlsContainer.appendChild(restartButton); // I don't understand this
    container.appendChild(quizContainer);
    container.appendChild(controlsContainer);
  });
  controlsContainer.appendChild(BackButton(rerenderQuiz));
  const showScore = () => {
    container.innerHTML = "";
    container.appendChild(Score());
    container.appendChild(restartButton);
  };
  controlsContainer.appendChild(NextButton(rerenderQuiz, showScore));
  controlsContainer.appendChild(restartButton);

  container.appendChild(controlsContainer);

>>>>>>> b8a7f24302f1e6ea4683b489d133bc2551526f70
  return container;
};
