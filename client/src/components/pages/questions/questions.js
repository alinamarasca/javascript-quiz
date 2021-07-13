import { state } from "../../../init/state.js";

const AllQuestions = () => {
  const ulAll = document.createElement("ul");
  ulAll.id = "all-questions";
  for (let i = 0; i < state.questions.length; i++) {
    const liQuestions = document.createElement("li");
    const ul = document.createElement("ul");
    liQuestions.appendChild(ul);
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
    ulAll.appendChild(liQuestions);
  }
  return ulAll;
};

export { AllQuestions };
