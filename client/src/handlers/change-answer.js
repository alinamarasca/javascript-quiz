import { state } from "../init/state.js";

export const changeAnswer = (event) => {
  const answerIndex = event.target.getAttribute("data-answer-index");
  const currentQuestionIndex = state.currentQuestion;

  const question = state.questions[currentQuestionIndex];
  question.answers[answerIndex].selected = event.target.checked;
};
