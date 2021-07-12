<<<<<<< HEAD
import { data } from "../../../../data/quiz.js";

const RenderQuiz = (questionIndex) => {
  const quizContainer = document.createElement("div");
  quizContainer.className = "quiz-container";
  const questions = document.createElement("p");
  const currentQuestion = data.questions[questionIndex];
  questions.innerText = currentQuestion.question;
  const answers = document.createElement("ul");
=======
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
>>>>>>> b8a7f24302f1e6ea4683b489d133bc2551526f70
  for (const item of currentQuestion.answers) {
    const li = document.createElement("li");
    li.innerText = item.text;
    const checkbox = document.createElement("input");
<<<<<<< HEAD
    checkbox.setAttribute("type", "checkbox");
    li.insertAdjacentElement("afterbegin", checkbox);
    answers.appendChild(li);
  }
  quizContainer.appendChild(questions);
  quizContainer.appendChild(answers);
=======
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
>>>>>>> b8a7f24302f1e6ea4683b489d133bc2551526f70
  return quizContainer;
};

export { RenderQuiz };
