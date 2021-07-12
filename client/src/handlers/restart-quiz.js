import { state } from "../init/state.js";

export const restartQuiz = () => {
    // We use a map to recreate each question and modify it at the same time
  const questions = state.questions.map((question) => {
    const defaultQuestion = JSON.parse(JSON.stringify(question)); // make a hard copy of the question
    defaultQuestion.answered = false;

    const defaultAnswers = question.answers.map((answer) => {
      const defaultAnswer = JSON.parse(JSON.stringify(answer)); // make a hard copy of the answer
      defaultAnswer.selected = false;
      return defaultAnswer;
    });

    defaultQuestion.answers = defaultAnswers;

    return defaultQuestion;
  });

  state.currentQuestion = 0;
  state.questions = questions; // overwrite the question in the state with the copied questions that have been modified
  };
