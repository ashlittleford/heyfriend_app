const questionEl = document.getElementById('question');
const optionsEl = document.querySelector('.options');
const questions = [
  {
    question: "What is the capital of France?",
    options: ["a) London", "b) Paris", "c) Berlin"],
    next: {
      "a": 1, // Index of next question if "a" is chosen
      "b": 2, // Index of next question if "b" is chosen
      "c": 1 // Index of next question if "c" is chosen (wrong answer leads back to Q1)
    }
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["a) Mount Everest", "b) K2", "c) Mount Kilimanjaro"],
    next: {
      "a": "win", // End quiz with win message if "a" is chosen
      "b": 1, // Show question 1 again if "b" is chosen (wrong)
      "c": 1 // Show question 1 again if "c" is chosen (wrong)
    }
  }
];

let currentQuestion = 0;

function showQuestion() {
  const question = questions[currentQuestion];
  questionEl.textContent = question.question;
  questionEl.style.opacity = 1; // Reset opacity for fadeIn animation (if implemented in CSS)

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
  const answer = event.target.dataset.answer;
  const next = questions[currentQuestion].next[answer];

  if (next === "win") {
    // Display win message (code for displaying message omitted)
  } else if (typeof next === "number") {
    currentQuestion = next;
    showQuestion();
  } else {
    // Handle other outcomes (e.g., game over)
  }
}

showQuestion(); // Start the quiz
