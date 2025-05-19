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
 
    "Question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Central Progress Unit",
      "Center Park Unit",
      "Cd Papper Unit"
    ],
    "answer": "Central Processing Unit"
  },
  {

    "Question": "What does PSU stand for?",
    "Possible": [
      "Power Supply Unit",
      "Power Super Unit",
      "Power Small User",
      "Power Supply Users"
    ],
    "answer": "Power Supply Unit"
  },
  {

    "Question": "GPU stands for?",
    "Possible": [
      "Graphics Processing Unit",
      "Gaming Program Utility",
      "Graphical Power Unit",
      "Graphic Performance Unit"
    ],
    "answer": "Graphics Processing Unit"
  },
  {

    "Question": "What does RAM stand for?",
    "Possible": [
      "Random Access Memory",
      "Read Access Memory",
      "Run Active Memory",
      "Random Allocation Mother"
    ],
    "answer": "Random Access Memory"
  },
  {

    "Question": "What does an operating system do?",
    "Possible": [
      "Manages hardware and software",
      "Increases brightness",
      "Connects to the internet",
      "Deletes apps"
    ],
    "answer": "Manages hardware and software"
  },
  {

    "Question": "Which of these is an operating system?",
    "Possible": [
      "Windows",
      "Microsoft Word",
      "Photoshop",
      "World of Warcraft"
    ],
    "answer": "Windows"
  },
  {

    "Question": "What type of software is MS Excel?",
    "Possible": [
      "Spreadsheet application",
      "System software",
      "Database",
      "Web browser"
    ],
    "answer": "Spreadsheet application"
  },
  {

    "Question": "What is the purpose of antivirus software?",
    "Possible": [
      "Detect and remove malware",
      "Speed up internet",
      "Block ads",
      "Update drivers"
    ],
    "answer": "Detect and remove malware"
  },
  {

    "Question": "What does HTML stand for?",
    "Possible": [
      "HyperText Markup Language",
      "Hyperlink Text Markup Language",
      "Home Tool Markup Language",
      "HighText Machine Language"
    ],
    "answer": "HyperText Markup Language"
  },
  {

    "Question": "Which data type is NOT in JavaScript?",
    "Possible": [
      "Integer",
      "String",
      "Boolean",
      "Undefined"
    ],
    "answer": "Undefined"
  },
  {

    "Question": "What does JS stand for?",
    "Possible": [
      "JavaScript",
      "Java System",
      "Just Script",
      "Join Style"
    ],
    "answer": "JavaScript"
  },
  {

    "Question": "What does CSS stand for?",
    "Possible": [
      "Cascading Style Sheets",
      "Creative Style Scripts",
      "Control Style Sheet",
      "Custom Styling Source"
    ],
    "answer": "Cascading Style Sheets"
  },
  {

    "Question": "What does IP stand for?",
    "Possible": [
      "Internet Protocol",
      "Input Port",
      "Internal Program",
      "Info Path"
    ],
    "answer": "Internet Protocol"
  },
  {

    "Question": "Which device directs data between networks?",
    "Possible": [
      "Router",
      "Switch",
      "Hub",
      "Modem"
    ],
    "answer": "Router"
  },
  {
 
    "Question": "What is secure web protocol?",
    "Possible": [
      "HTTPS",
      "FTP",
      "SSH",
      "HTTP"
    ],
    "answer": "HTTPS"
  },
  {

    "Question": "HTTP port?",
    "Possible": [
      "80",
      "21",
      "443",
      "110"
    ],
    "answer": "80"
  }
]



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
