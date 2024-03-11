// welcome screen
const welcomeContainer = document.getElementById('welcome-container');
const welcomes = [
  "Hey Friend, we are so glad you are here.",
  "We are going to ask you are series of questions to find the best tool for you.",
  "We hope you find something useful today."
];

let currentWelcome = 0;

function showWelcome() {
  // const welcome = welcomes[currentWelcome];
  welcomeContainer.welcomeContent = welcomes[currentWelcome];
  // welcomeContainer.welcomeContent = welcome.welcome;
  welcomeContainer.style.opacity = 1; // Reset opacity for fadeIn animation

   currentWelcome++;
  if (currentWelcome >= welcomes.length) {
    // currentText = 0; // Start over after displaying all texts // change this to -- go to questions
      			setTimeout(function() {
        		window.location.href = "/questions.html";
      				}, 2000); // Redirect after 2 seconds (adjust as needed)
  }

  setTimeout(function() {
    welcomeContainer.style.opacity = 0; // Fade out after a delay
    setTimeout(showWelcome, 5000); // Show next text after 1 second fade-out
  }, 5000); // Delay before fade-out (adjust as needed)
}

showWelcome(); // Call the function to start the text display// JavaScript Document