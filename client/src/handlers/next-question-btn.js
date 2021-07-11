import { state } from "../init/state.js";

export const nextQuestionButton = (rerenderQuiz) => {
  state.questions[state.currentQuestion].answered = true;
  state.currentQuestion += 1;

  rerenderQuiz();

  const endOfQuiz = state.questions.length;
  if (state.currentQuestion + 1 === endOfQuiz) {
    state.currentQuestion = 0;
  }
};
