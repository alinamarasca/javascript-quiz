const DeleteButton = () => {
  const controlDiv = document.createElement("div");
  const button = document.createElement("button");
  button.id = "delete-question";
  controlDiv.appendChild(button);
  return controlDiv;
};

export { DeleteButton };
