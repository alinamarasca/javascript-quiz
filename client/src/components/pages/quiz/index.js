import { inputGreeting } from "../../shared/input-greeting.js";
import { restartButton } from "../../shared/restart-btn.js";
import { nextButton } from "./next-btn.js";
/**
 * The quiz page.
 *
 * @returns {HTMLDivElement} A rendered quiz page.
 */
export const quiz = () => {
  const container = document.createElement("div");
  container.className = "body";

  container.appendChild(nextButton());
  container.appendChild(restartButton());
  container.appendChild(inputGreeting());

  return container;
};
