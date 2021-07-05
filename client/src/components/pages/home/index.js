import { inputGreeting } from "../../shared/input-greeting.js";
import { restartButton } from "../../shared/restart-btn.js";
import { makeInstructions } from "./instructions.js";
/**
 * The home page.
 *
 * @returns {HTMLDivElement} A rendered home page.
 */

export const home = () => {
  const container = document.createElement("div");
  container.className = "body";
  container.innerHTML = "home: ";

  container.appendChild(makeInstructions());
  container.appendChild(restartButton());
  container.appendChild(inputGreeting());

  return container;
};
