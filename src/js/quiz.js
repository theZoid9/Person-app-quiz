const CATEGORY_ID = "1";
  let quizData = [];
  let currentIndex = 0;
  let score = 0;

  const questionDisplay = document.getElementById('questionDisplay');
  const buttons = [
    document.getElementById('btn0'),
    document.getElementById('btn1'),
    document.getElementById('btn2'),
    document.getElementById('btn3')
  ];
  const resultDisplay = document.getElementById('result');

  function loadQuestion(index) {
    const q = quizData[index];
    questionDisplay.textContent = q.Question;
    q.Possible.forEach((option, i) => {
      buttons[i].textContent = option;
      buttons[i].onclick = () => handleAnswer(option, q.answer);
    });
  }

  function handleAnswer(selected, correct) {
    if (selected === correct) score++;
    currentIndex++;
    if (currentIndex < quizData.length) {
      loadQuestion(currentIndex);
    } else {
      showResults();
    }
  }

  function showResults() {
    document.getElementById('quizContainer').style.display = 'none';
    resultDisplay.style.display = 'block';
    resultDisplay.textContent = `Quiz Finished! You got ${score} out of ${quizData.length} correct.`;
  }

  // Fetch and filter by category
  fetch('info.json')
    .then(response => response.json())
    .then(data => {
      quizData = data.filter(q => q.Category === CATEGORY_ID);
      if (quizData.length > 0) {
        loadQuestion(currentIndex);
      } else {
        questionDisplay.textContent = "No questions found for this category.";
      }
    })
    .catch(error => {
      questionDisplay.textContent = "Failed to load quiz data.";
      console.error("Error loading info.json:", error);
    });