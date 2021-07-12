import { state } from "../../../init/state.js";
import { changeAnswer } from "../../../handlers/change-answer.js";
import { Score } from "./score.js";

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
    checkbox.checked =
      state.questions[questionIndex].answers[answerCounter].selected;
    checkbox.addEventListener("change", changeAnswer);
    li.insertAdjacentElement("afterbegin", checkbox);
    answers.appendChild(li);
    answerCounter++;
  }
  quizContainer.appendChild(questions);
  quizContainer.appendChild(answers);
  quizContainer.appendChild(Score());
  return quizContainer;
};

export { RenderQuiz };
