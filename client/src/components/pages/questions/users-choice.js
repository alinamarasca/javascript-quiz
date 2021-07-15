import { state } from "../../../init/state.js";


export const UsersChoice = (i) => {
    for (const item of state.questions[i].answers) {
    if (state.questions[i].answered) {
    if (item.correct === true && item.selected === true) {
      li.classList.add("right-choice");
    } else if (item.correct === false && item.selected === true) {
      li.classList.add("wrong-choice");
    }
  }
}
}