let timeLeft = 60;
const timerDisplay = document.getElementById("timer");

const startTimer = () => {
  const timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;

    if (timeLeft <= 10) {
      timerDisplay.parentElement.classList.add("warning");
    }

    if (timeLeft <= 5) {
      timerDisplay.parentElement.classList.remove("warning");
      timerDisplay.parentElement.classList.add("danger");
    }

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert("⏰ Time's up!");
      endQuiz();
    }
  }, 1000);
};


const questionDisplay = document.getElementById('questionDisplay');
const buttons = [
  document.getElementById('btn0'),
  document.getElementById('btn1'),
  document.getElementById('btn2'),
  document.getElementById('btn3')
];
const resultDisplay = document.getElementById('result');
const currentQuestionElem = document.getElementById('current-question');
const totalQuestionsElem = document.getElementById('total-questions');

let quizData = [];
let currentIndex = 0;
let score = 0;


const dummyData = [
  {
    question: "What does CPU stand for?",
    options: ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit", "Control Panel Unit"],
    answer: "Central Processing Unit"
  },
  {
    question: "What is the brain of the computer?",
    options: ["Motherboard", "RAM", "CPU", "Hard Drive"],
    answer: "CPU"
  },
  {
    question: "What does RAM stand for?",
    options: ["Random Access Memory", "Read Access Memory", "Rapid Application Management", "Random Application Method"],
    answer: "Random Access Memory"
  }
];


const loadQuestion = () => {
  const q = quizData[currentIndex];
  questionDisplay.textContent = q.question;
  buttons.forEach((btn, i) => {
    btn.textContent = q.options[i];
    btn.disabled = false;
  });

  currentQuestionElem.textContent = currentIndex + 1;
  totalQuestionsElem.textContent = quizData.length;
};

const handleAnswer = (selected) => {
  const correctAnswer = quizData[currentIndex].answer;
  const selectedText = buttons[selected].textContent;

  if (selectedText === correctAnswer) {
    resultDisplay.textContent = "✅ Correct!";
    score += 10;
  } else {
    resultDisplay.textContent = `❌ Wrong! Correct: ${correctAnswer}`;
  }

  buttons.forEach((btn) => (btn.disabled = true));

  setTimeout(() => {
    resultDisplay.textContent = "";
    currentIndex++;
    if (currentIndex < quizData.length) {
      loadQuestion();
    } else {
      endQuiz();
    }
  }, 1000);
};

const endQuiz = () => {
  alert(`Quiz over! 🎉 Your score: ${score}`);

  window.location.href = "../pages/highscores.html";
};


window.addEventListener("DOMContentLoaded", () => {
  quizData = dummyData; 
  startTimer();
  loadQuestion();

  buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => handleAnswer(index));
  });
});
