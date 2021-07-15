import { state } from "../../../init/state.js";
import { DeleteButton } from "./delete-button.js";
import { UsersChoice } from "./users-choice.js";

const AllQuestions = () => {
  const ulAll = document.createElement("ul");
  ulAll.id = "all-questions";
  for (let i = 0; i < state.questions.length; i++) {
    // create list of questions
    const liQuestions = document.createElement("li");
    liQuestions.className = "question";
    liQuestions.setAttribute("data-question-index", i);
    liQuestions.appendChild(DeleteButton());
    const ul = document.createElement("ul");
    liQuestions.appendChild(ul);
    const p = document.createElement("p");
    p.textContent = state.questions[i].question;
    ul.appendChild(p);
    // create answers
    for (const item of state.questions[i].answers) {
      const li = document.createElement("li");
      li.innerText = item.text;
      // mark right answers
      if (item.correct === true) {
        li.classList = "correct";
      } else {
        li.classList = "incorrect";
      }
      if (state.questions[i].answered) {
        if (item.correct === true && item.selected === true) {
          li.classList.add("right-choice");
        } else if (item.correct === false && item.selected === true) {
          li.classList.add("wrong-choice");
        }
      }
      ul.appendChild(li);
    }
    ulAll.appendChild(liQuestions);
  }
  return ulAll;
};

export { AllQuestions };
