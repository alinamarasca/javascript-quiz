/* eslint-disable spellcheck/spell-checker */
/* eslint-disable camelcase */
/* eslint-disable prettier/prettier */
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
  container.innerHTML = "";

  const head_ing = document.createElement("h1");
  head_ing.innerHTML = "JavaScript Quiz Test";
  head_ing.classList = "title";

  container.appendChild(head_ing);
  container.appendChild(makeInstructions());
  container.appendChild(restartButton());
  container.appendChild(inputGreeting());

  return container;
};
