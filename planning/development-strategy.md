# Must-Haves

- **Home Page**
  - [ ] a user can read instructions for the quiz
  - [ ] paragraph with instruction
  - [ ] separate 'instructions' branch:
    - [ ] component instructions.js: return `</p>`
    - [ ] css
  
  - [ ] a user can know how many questions are in the quiz
  - [ ] paragraph saying how many questions are there (get amount of questions from the state, no hardcode)
  - [ ] separate 'count' branch:
    - [ ] component count.js: return `</p>`
    - [ ] css
  
- **Quiz Page**
  - [ ] a user can start/restart the quiz
  - [ ] restart button
  - [ ] separate 'restart-btn' branch:
    - [ ] component restart-btn.js: return `<button>`
    - [ ] handler restart-quiz.js (append listener)
    - [ ] update state: reset state, all previously answered cleared
    - [ ] add the button to quiz and home page
    - [ ] css

  - [ ] a user can select one or more answers for the current question
  - [ ] display questions and answers with checkboxes
  - [ ] separate 'quiz' branch:
    - [ ] component question.js: return `<p>`, {param} - which question
    - [ ] component answers.js: return `<ul>`: `<li>` + `checkbox`, {param} - which answers
    - [ ] handler answer-question.js: `checkbox` updates the state (selected)

  - [ ] a user can go forward to the next question
  - [ ] next button
  - [ ] separate 'next-btn' branch:
    - [ ] component next-btn.js: return `<button>`
    - [ ] handler next-question-btn.js:
    - [ ] marks current question in the state as answered
    - [ ] goes to the next
    - [ ] css

- [ ] a user can see their score at the end of the quiz
- [ ] calculate and display the score
- [ ] separate 'score' branch:
  - [ ] component score.js: returns `<p>` (~Congratulations, blah blah + get amount of questions from the state, no hard code)
  - [ ] css
  
## Should-Haves

- **Quiz Page**
  - [ ] a user can see how far they are through the quiz
  - [ ] display number of current question (or progress bar)
  - [ ] separate 'progress' branch:
    - [ ] component progress.js: return `<p>` (~'you are at question 3 out of 5', get number from the state, no hard code)
  - [ ] css
  
<!--

  These will be the main types of tasks in the quiz project:
    `type: components`
    `type: css`
    `type: logic`
    `type: handlers`

  Some general changes you will need to make:
  - client/data/quiz.js (to add questions)
  - client/config.js (to configure your repo name for deployment)

  For each user story you may need to write code in:
  - client/src/components
  - client/src/handlers
  - client/src/logic
  - client/styles
  - client/public

  everything else should work already!

-->
