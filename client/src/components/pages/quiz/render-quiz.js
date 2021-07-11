import { state } from "../../../init/state.js";
import { changeAnswer } from "../../../handlers/change-answer";

const RenderQuiz = (questionIndex) => {
  const quizContainer = document.createElement("div");
  const questions = document.createElement("p");
  const currentQuestion = state.questions[questionIndex];
  questions.innerText = currentQuestion.question;
  const answers = document.createElement("ul");

  let answerCounter = 0;
  for (const item of currentQuestion.answers) {
    const li = document.createElement("li");
    li.innerText = item.text;
    const checkbox = document.createElement("input");
    checkbox.setAttribute("data-answer-index", answerCounter);
    checkbox.setAttribute("type", "checkbox");
    checkbox.addEventListener("change", changeAnswer);
    li.insertAdjacentElement("afterbegin", checkbox);
    answers.appendChild(li);
    answerCounter++;
  }
  quizContainer.appendChild(questions);
  quizContainer.appendChild(answers);
  return quizContainer;
};

export { RenderQuiz };
