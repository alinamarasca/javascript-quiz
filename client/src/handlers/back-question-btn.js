import { state } from "../init/state.js";

export const backQuestionButton = (rerenderQuiz) => {
  state.currentQuestion -= 1;
  if (state.currentQuestion < 0) {
    state.currentQuestion = 0;
  }

  rerenderQuiz();
};
