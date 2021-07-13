import { deleteQuestion } from "../../../handlers/delete-question.js";

export const DeleteButton = () => {
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteQuestion);
  return button;
};
