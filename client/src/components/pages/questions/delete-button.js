import { deleteQuestion } from "../../../handlers/delete-question.js";

const DeleteButton = () => {
  const controlDiv = document.createElement("div");
  const button = document.createElement("button");
  button.id = "delete-question";
  button.addEventListener("click", deleteQuestion);
  controlDiv.appendChild(button);
  return controlDiv;
};

export { DeleteButton }
