const text = [
  "Hey Friend, we are so glad you are here.",
  "We are going to ask you a series of questions to find the best tool for you.",
  "We hope you find something useful today."
];


let currentTextIndex = 0;



function displayText() {
  const textElement = document.getElementById("text");
  const textLine = textElement.querySelector(".text-line"); // Select the child element

  // Update text content
  textLine.textContent = text[currentTextIndex];


  setTimeout(() => {

    currentTextIndex++;

    // Check if last sentence
    if (currentTextIndex === text.length) {
      // Redirect to another page after displaying all texts
      window.location.href = "questions.html";  // Replace with your actual URL
      return;
    }

    // Call the function again for the next text
    displayText();
  }, 6000); // Adjust time in milliseconds (6 seconds)
}

// Call the function to start displaying text
displayText();