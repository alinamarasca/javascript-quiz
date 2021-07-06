export const makeInstructions = () => {
  const instructions = document.createElement("SECTION");
  instructions.classList = "instructions";
  const textTitle = document.createElement("H2");
  instructions.appendChild(textTitle);
  textTitle.innerText = "Instructions:";
  const paragraph = document.createElement("P");
  instructions.appendChild(paragraph);
  paragraph.innerText = `You will get 1 point for each correct answer.
  At the end of the Quiz, your total score will be displayed.
  Keep in mind multiple choice is possible.
  There is no time limit. You can restart and do the test as many times as you want.
  Good luck!`;
  return instructions;
};
