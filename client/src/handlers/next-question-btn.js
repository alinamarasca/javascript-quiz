import { state } from "../init/state.js";

export const nextQuestionButton = (rerenderQuiz) => {
  state.questions[state.currentQuestion].answered = true;
  state.currentQuestion += 1;

  const endOfQuiz = state.questions.length;
  if (state.currentQuestion >= endOfQuiz) {
    state.currentQuestion = state.questions.length - 1;
  }

  rerenderQuiz();
};
