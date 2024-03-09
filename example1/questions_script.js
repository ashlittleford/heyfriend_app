const questionEl = document.getElementById('question');
const optionsEl = document.querySelector('.options');
const questions = [
  {
    question: "What is the capital of France?",
    options: ["a) London", "b) Paris", "c) Berlin"],
    next: {
      "a": 2, // Index of next question if "a" is chosen
      "b": 1, // Index of next question if "b" is chosen
      "c": 2 // Index of next question if "c" is chosen
    }
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["a) Mount Everest", "b) K2", "c) Mount Kilimanjaro"],
    next: {
      "a": 3, // End quiz if "a" is chosen (winner)
      "b": 2, // Show question 2 if "b" is chosen
      "c": 2 // Show question 2 if "c" is chosen
    }
  },
  {
    question: "You've almost finished!  What is 2 + 2?",
    options: ["a) 3", "b) 4", "c) 5"],
    next: {
      "a": 2, // Show question 2 again if "a" is chosen (wrong)
      "b": 3, // End quiz if "b" is chosen (winner)
      "c": 2 // Show question 2 again if "c" is chosen (wrong)
    }
  }
];

let currentQuestion = 0;

function showQuestion() {
  const question = questions[currentQuestion];
  questionEl.textContent = question.question;
  questionEl.style.opacity = 1; // Reset opacity for fadeIn animation

  optionsEl.innerHTML = ""; // Clear existing options
  question.options.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option;
    button.dataset.answer = option.slice(2, 3); // Extract answer (a, b, or c)
    button.addEventListener('click', handleAnswer);
    optionsEl.appendChild(button);
  });
}

function handleAnswer(event) {
  const answer = event.