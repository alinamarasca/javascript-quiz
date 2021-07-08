import { data } from "../../data/quiz.js";
import { RenderQuiz } from "../components/pages/quiz/render-quiz.js";

export const nextQuestionButton = () => {
  const parent = document.querySelector(".quiz-container");
  parent.textContent = "";
  data.currentQuestion += 1;
  parent.appendChild(RenderQuiz(data.currentQuestion));
  const endOfQuiz = data.questions.length;
  if (data.currentQuestion + 1 === endOfQuiz) {
    data.currentQuestion = 0;
  }
};
