import { inputGreeting } from "../../shared/input-greeting.js";
import { restartButton } from "../../shared/restart-btn.js";
import { makeInstructions } from "./instructions.js";
/**
 * The home page.
 *
 * @returns {HTMLDivElement} A rendered home page.
 */
const homeInstructions = `You will get 1 point for each correct answer. At the end of the Quiz, your total score will be displayed.Keep in mind multiple choice is possible.There is no time limit. You can restart and do the test as many times as you want.`;

export const home = () => {
  const container = document.createElement("div");
  container.className = "body";
  container.innerHTML = "home: ";

  container.appendChild(makeInstructions(homeInstructions));
  container.appendChild(restartButton());
  container.appendChild(inputGreeting());

  return container;
};
