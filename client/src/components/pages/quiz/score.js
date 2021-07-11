import { state } from "../../../init/state.js";

const Score = () => {
  let userScore = 0;
  const totalScore = state.questions.length;

  for (let questionIndex in state.questions) {
    const question = state.questions[questionIndex];

    if (question.answered === true) {
      let allAnswersCorrect = true;
      for (let answerIndex in question.answers) {
        const answer = question.answers[answerIndex];

        if (answer.selected !== answer.correct) {
          allAnswersCorrect = false;
        }
      }

      if (allAnswersCorrect === true) {
        userScore++;
      }
    }
  }

  const p = document.createElement("p");
  p.innerText = `You have ${userScore} questions correct out of a total of ${totalScore} questions`;

  return p;
};

export { Score };
