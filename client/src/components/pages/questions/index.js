import { DeleteButton } from "./delete-button.js";
import { AllQuestions } from "./questions.js";

/**
 * The questions page.
 *
 * @returns {HTMLDivElement} A rendered questions page.
 */
export const questions = () => {
  const container = document.createElement("div");
  container.className = "body";
  container.appendChild(AllQuestions());
  const container1 = document.getElementsByClassName("question");
  console.log(container1);
  return container;
};
