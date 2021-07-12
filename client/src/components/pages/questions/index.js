import { inputGreeting } from "../../shared/input-greeting.js";
import { AllQuestions } from "./questions.js";

/**
 * The questions page.
 *
 * @returns {HTMLDivElement} A rendered questions page.
 */
export const questions = () => {
  const container = document.createElement("div");
  container.className = "body";

  container.appendChild(inputGreeting());
  container.appendChild(AllQuestions());
  return container;
};
