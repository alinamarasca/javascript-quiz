import { AllQuestions } from "../components/pages/questions/questions.js";
import { state } from "../init/state.js";

export const deleteQuestion = (event) => {
  const { target } = event;
  if (event.target.id === "delete-question") {
    const toDelete = target.parentElement.getAttribute("data-question-index");
    state.questions.splice(toDelete, 1);
    const section = document.getElementById("questions-list");
    section.innerHTML = "";
    section.appendChild(AllQuestions(state.questions));
  }
};
