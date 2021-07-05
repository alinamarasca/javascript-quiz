export const makeInstructions = (text) => {
  const instructions = document.createElement("P");
  instructions.classList = "instructions";
  instructions.innerText = text;
  return instructions;
};
