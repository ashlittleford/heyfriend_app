	const textElements = document.querySelector('.text'); // Select the paragraph
    const textLines = [  // Array of your text lines
		"Hey Friend, we are so glad you are here.",
  		"We are going to ask you are series of questions to find the best tool for you.",
		"We hope you find something useful today."
    ];
let currentTextIndex = 0;

    function fadeInNextText() {
      if (currentTextIndex >= textLines.length) {
        // All text displayed, load next page
        window.location.href = "questions.html";  // Replace with your actual URL
        return;
      }

      // Update text content before animation
      textElements.textContent = textLines[currentTextIndex];

      // Add animation class
      textElements.classList.add('text');

      /* Ensure complete fade-out before proceeding (using requestAnimationFrame) */
      textElements.addEventListener('transitionend', () => {
        textElements.classList.remove('text');
        window.requestAnimationFrame(() => {
          currentTextIndex++;
          fadeInNextText();
        });
      });
    }

    fadeInNextText();