import { data } from "../../data/quiz.js";

/* check checkbox->select and true same?->get a  point
array of checkboxes - which is cliked-> index
*/
export const CheckAnswer = () => {
    var checkboxes = document.querySelectorAll("input[type=checkbox]");
    let enabledSettings = []
    
console.log(checkboxes)
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
          enabledSettings = 
            Array.from(checkboxes) // Convert checkboxes to an array to use filter and map.
            .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
            .map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.
            
          console.log(enabledSettings)
        })
      });
//   const index = data.currentQuestion;
//   console.log(data.questions[index].answers[index].correct);


  //console.log(data);
};
