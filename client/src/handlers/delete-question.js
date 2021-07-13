import { AllQuestions } from "../components/pages/questions/questions.js";
import { state } from "../init/state.js";

export const deleteQuestion = (event) => {
  const { target } = event;
  const toDelete = target.parentElement.getAttribute("data-question-index");
  state.questions.splice(toDelete, 1);
  const section = document.getElementById("section");
  section.innerHTML = "";
  section.appendChild(AllQuestions(state.questions));
};
