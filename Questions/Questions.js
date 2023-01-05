// Variable for time
let time = 50;
var score = 0;
const option_list = document.querySelector(".option_list");
const option = option_list.querySelectorAll(".option");

function timer001() {
  time = time - 1;

  if (time <= 50) {
    document.getElementById("time001").innerHTML = time;
  }

  if (time < 1) {
    clearInterval(update);
  }

  if (time == 0) {
    location.replace("../alldone/alldone.html");
    localStorage.setItem("mostRecentScore", score);
    // Takes you to the all done page and saves the score to local storage
  }
}

update = setInterval("timer001()", 1000);

//Function for incorrect answer
function deductTime() {
  time = time - 10;

  if (time < 1) {
    clearInterval(update);
  }

  if (time < 1) {
    location.replace("../alldone/alldone.html");
    localStorage.setItem("mostRecentScore", score);
  }
}

const questions = [
  {
    questionText: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },
  {
    questionText: "Arrays in JavaScript can be used to store ______.",
    options: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
  },
  {
    questionText:
      "String values must be enclosed within _____ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes",
  },
  {
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "4. console.log",
  },
  {
    questionText:
      "Which of the following is time statement that can be used to terminate time loop, switch or label statement?",
    options: ["1. break", "2. stop", "3. halt", "4. exit"],
    answer: "1. break",
  },
];

let que_count = 0;
const next_btn = document.getElementById("next_btn");

//If next button is clicked
next_btn.onclick = () => {
  if (que_count < questions.length - 1) {
    que_count++;
    showQuestion(que_count);
    document.getElementById("correctBox").style.display = "none";
    option_list.childNodes[0].setAttribute("onClick", "optionSelected(this)");
    option_list.childNodes[1].setAttribute("onClick", "optionSelected(this)");
    option_list.childNodes[2].setAttribute("onClick", "optionSelected(this)");
    option_list.childNodes[3].setAttribute("onClick", "optionSelected(this)");
  } else {
    location.replace("../alldone/alldone.html");
    localStorage.setItem("mostRecentScore", score);
  }
};

//Getting questions and options from array above
function showQuestion(index) {
  const que_text = document.querySelector(".que_text");

  let que_tag = "<h2>" + questions[index].questionText + "</h2>";
  let option_tag =
    '<p class="option">' +
    questions[index].options[0] +
    "</p>" +
    '<p class="option">' +
    questions[index].options[1] +
    "</p>" +
    '<p class="option">' +
    questions[index].options[2] +
    "</p>" +
    '<p class="option">' +
    questions[index].options[3] +
    "</p>";

  que_text.innerHTML = que_tag;
  option_list.innerHTML = option_tag;

  const option = option_list.querySelectorAll(".option");
  for (i = 0; i < option.length; i++) {
    option[i].setAttribute("onClick", "optionSelected(this)");
  }
}

showQuestion(0);

// Checking if answer is correct or incorrect
function optionSelected(answer) {
  let userAns = answer.textContent;
  let correctAns = questions[que_count].answer;

  if (userAns == correctAns) {
    document.getElementById("correctBox").innerHTML = "Correct!";
    document.getElementById("correctBox").style.display = "block";
    answer.style.backgroundColor = "green";
    score = score + 10;
    option_list.childNodes[0].setAttribute("onClick", "");
    option_list.childNodes[1].setAttribute("onClick", "");
    option_list.childNodes[2].setAttribute("onClick", "");
    option_list.childNodes[3].setAttribute("onClick", "");
  } else {
    document.getElementById("correctBox").innerHTML = "Incorrect!";
    document.getElementById("correctBox").style.display = "block";
    answer.style.backgroundColor = "red";
    deductTime();
    option_list.childNodes[0].setAttribute("onClick", "");
    option_list.childNodes[1].setAttribute("onClick", "");
    option_list.childNodes[2].setAttribute("onClick", "");
    option_list.childNodes[3].setAttribute("onClick", "");
  }
}
