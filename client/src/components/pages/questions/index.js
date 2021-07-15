import { deleteQuestion } from "../../../handlers/delete-question.js";
import { AllQuestions } from "./questions.js";

/**
 * The questions page.
 *
 * @returns {HTMLDivElement} A rendered questions page.
 */
export const questions = () => {
  const container = document.createElement("div");
  container.className = "body";

  const listContainer = document.createElement("section");
  listContainer.id = "questions-list";
  listContainer.addEventListener("click", deleteQuestion);
  container.appendChild(listContainer);

  listContainer.appendChild(AllQuestions());

  return container;
};
