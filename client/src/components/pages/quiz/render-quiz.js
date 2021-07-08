import { data } from "../../../../data/quiz.js";
import { CheckAnswer } from "../../../handlers/answer-question.js"

const RenderQuiz = (questionIndex) => {
  const quizContainer = document.createElement("div");
  quizContainer.className = "quiz-container";
  const questions = document.createElement("p");
  const currentQuestion = data.questions[questionIndex];
  questions.innerText = currentQuestion.question;
  const answers = document.createElement("ul");
  for (const item of currentQuestion.answers) {
    const li = document.createElement("li");
    li.innerText = item.text;
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    li.insertAdjacentElement("afterbegin", checkbox);
    checkbox.addEventListener("change", CheckAnswer);
    answers.appendChild(li);
  }
  quizContainer.appendChild(questions);
  quizContainer.appendChild(answers);
  return quizContainer;
};

export { RenderQuiz };
