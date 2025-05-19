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
  },
  {
    question: "What does PSU stand for?",
    options: ["Power Supply Unit", "Power Super Unit", "Power Small User", "Power Supply Users"],
    answer: "Power Supply Unit"
  },
  {
    question: "GPU stands for?",
    options: ["Graphics Processing Unit", "Gaming Program Utility", "Graphical Power Unit", "Graphic Performance Unit"],
    answer: "Graphics Processing Unit"
  },
  {
    question: "What does an operating system do?",
    options: ["Manages hardware and software", "Increases brightness", "Connects to the internet", "Deletes apps"],
    answer: "Manages hardware and software"
  },
  {
    question: "Which of these is an operating system?",
    options: ["Windows", "Microsoft Word", "Photoshop", "World of Warcraft"],
    answer: "Windows"
  },
  {
    question: "What type of software is MS Excel?",
    options: ["Spreadsheet application", "System software", "Database", "Web browser"],
    answer: "Spreadsheet application"
  },
  {
    question: "What is the purpose of antivirus software?",
    options: ["Detect and remove malware", "Speed up internet", "Block ads", "Update drivers"],
    answer: "Detect and remove malware"
  },
  {
    question: "What does HTML stand for?",
    options: ["HyperText Markup Language", "Hyperlink Text Markup Language", "Home Tool Markup Language", "HighText Machine Language"],
    answer: "HyperText Markup Language"
  },
  {
    question: "Which data type is NOT in JavaScript?",
    options: ["Integer", "String", "Boolean", "Undefined"],
    answer: "Undefined"
  },
  {
    question: "What does JS stand for?",
    options: ["JavaScript", "Java System", "Just Script", "Join Style"],
    answer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Creative Style Scripts", "Control Style Sheet", "Custom Styling Source"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "What does IP stand for?",
    options: ["Internet Protocol", "Input Port", "Internal Program", "Info Path"],
    answer: "Internet Protocol"
  },
  {
    question: "Which device directs data between networks?",
    options: ["Router", "Switch", "Hub", "Modem"],
    answer: "Router"
  },
  {
    question: "What is secure web protocol?",
    options: ["HTTPS", "FTP", "SSH", "HTTP"],
    answer: "HTTPS"
  },
  {
    question: "HTTP port?",
    options: ["80", "21", "443", "110"],
    answer: "80"
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
