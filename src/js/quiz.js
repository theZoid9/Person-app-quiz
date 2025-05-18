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

