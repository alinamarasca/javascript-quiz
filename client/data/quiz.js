export const data = {
  currentQuestion: 0,
  greeting: 'hello',
  questions: [
    {
      question:
        'Which are correct ways to declare a variable in JavaScript? (strict mode)',
      answered: false,
      answers: [
        {
          text: 'const name = "Tim";',
          correct: true,
          selected: false,
        },
        {
          text: 'name = "Tim";',
          correct: false,
          selected: false,
        },
        {
          text: 'let name = "Tim";',
          correct: true,
          selected: false,
        },
        {
          text: 'var name = "Tim";',
          correct: true,
          selected: false,
        },
      ],
      links: [
        {
          text: 'javascript.info',
          url: 'https://javascript.info/variables',
        },
        {
          text: 'Tyler McGinnis',
          url: 'https://ui.dev/var-let-const/',
        },
      ],
    },
    {
      question: 'What does `typeof` do?',
      answered: false,
      answers: [
        {
          text: 'changes the type of a primitive value',
          correct: false,
          selected: false,
        },
        {
          text: 'returns a string describing the type of a value',
          correct: true,
          selected: false,
        },
        {
          text: 'determines if a value is primitive',
          correct: false,
          selected: false,
        },
        {
          text: 'can tell the difference between arrays and objects',
          correct: false,
          selected: false,
        },
      ],
      links: [
        {
          text: 'javascript.info',
          url: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'MDN',
          url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        },
      ],
    },
    {
      question: 'What does JSON.parse do?',
      answered: false,
      answers: [
        {
          text: 'Foobar.',
          correct: false,
          selected: false,
        },
        {
          text: 'Transforms an object into a JSON string.',
          correct: false,
          selected: false,
        },
        {
          text: 'Only validates a JSON object.',
          correct: false,
          selected: false,
        },
        {
          text: 'Transforms values to an Array',
          correct: false,
          selected: false,
        },
      ],
      links: [
        {
          text: 'javascript.info',
          url: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'MDN',
          url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        },
      ],
    },
  ],
};
