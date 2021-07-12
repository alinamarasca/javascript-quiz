import { RenderQuiz } from "../quiz/render-quiz.js";
import { state } from "../../../init/state.js";

const AllQuestions = () => {
  const ol = document.createElement("ol");
  ol.className = "all-questions";
  for (let i = 0; i < state.questions.length; i++) {
    ol.appendChild(RenderQuiz(i));
  }
  return ol;
};
// console.log(state.questions);

export { AllQuestions };
