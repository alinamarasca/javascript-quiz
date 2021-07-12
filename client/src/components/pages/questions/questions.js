// import { RenderQuiz } from "../quiz/render-quiz.js";
import { state } from "../../../init/state.js";

const AllQuestions = () => {
  const ol = document.createElement("ol");
  ol.id = "all-questions";
  for (let i = 0; i < state.questions.length; i++) {
    const li = document.createElement("li");
    const ul = document.createElement("ul");
    li.appendChild(ul);
    const p = document.createElement("p");
    p.textContent = state.questions[i].question;
    ul.appendChild(p);
    for (const item of state.questions[i].answers) {
      const li = document.createElement("li");
      li.innerText = item.text;
      if (item.correct === true) {
        li.classList = "correct";
      } else {
        li.classList = "incorrect";
      }
      ul.appendChild(li);
    }
    ol.appendChild(li);
  }
  return ol;
};

export { AllQuestions };
