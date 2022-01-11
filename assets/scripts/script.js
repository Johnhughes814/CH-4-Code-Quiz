var questions = [
  {
    prompt: "Where is the JavaScript placed inside an HTML document or page?",
    answerChoices: [
      "In the <body> and <head> sections.",
      "In the <meta> section.",
      "In the <title> section.",
      "In the <footer> section.",
    ],
    answer: "In the <body> and <head> sections.",
  },

  {
    prompt: "What is used to execute actions based on a trigger or condition?",
    answerChoices: [
      "Conditional Statement",
      "RegExp or Regular Expression",
      "Boolean Variable",
      "Event Handlers",
    ],
    answer: "Event Handlers",
  },

  {
    prompt:
      "What elements are used to test for TRUE or False values stored in variables?",
    answerChoices: [
      "Trigger readers.",
      "RegExp or Regular Expressions.",
      "Conditional statements.",
      "Comparison and logical operators.",
    ],
    answer: "Conditional statements",
  },
  {
    prompt:
      "What is the name of the statement that is used to exit or end a loop?",
    answerChoices: [
      "Falter statement",
      "Close statement",
      "Conditional statement",
      "Break statement",
    ],
    answer: "Break statement",
  },
  {
    prompt:
      "In JavaScript, what element is used to store and manipulate text usually in multiples?",
    answerChoices: ["Strings", "Variables", "Arrays", "Function"],
    answer: "Variables",
  },
];

// variables to keep track of quiz state
var currentQuestionIndex = 0; // we set this to zero so the quiz starts on the first question (at index 0)
var time = questions.length * 15;
var timerId;

// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

// sound effects
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");

// function startQuiz
function startQuiz() {
  // hide start screen
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");

  // un-hide questions section
  questionsEl.removeAttribute("class");

  // start timer
  timerId = setInterval(clockTick, 1000);
  // show starting time
  timerEl.textContent = time;

  // call the getQuestion functions
  getQuestion();
}
// * function getQuestion
function getQuestion() {
  // get current question object from array
  var currentQuestion = questions[currentQuestionIndex];
  // update title with current question
  // TODO be able to explain what is going on in lines 76-77. Include two references used to find your explanation.
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.title;

  // clear out any old question choices

  // loop over choices

  // create new button for each choice

  // attach click event listener to each choice

  // display on the page
}

//if they get it right, move on to next question and show current answer (index.answer in questions array, in which we have the answer and the choices)

// * function questionClick

// check if user guessed wrong

// penalize time if wrong lose 15 seconds

// display new time on page

// play "wrong" sound effect

// play "right" sound effect

// Feedback set to show RIGHT or WRONG for 1 sec

// move to next question 'currentQuestionIndex'

// check if we've run out of questions

// * function quizEnd

// TODO stop timer

// TODO show end screen

// TODO show final score

// TODO hide questions section

// update time

// check if user ran out of time

// * function saveHighscore

// get value of input box

// make sure value wasn't empty

// get saved scores from localstorage, or if not any, set to empty array

// format new score object for current user

// save to localstorage

// redirect to next page

// "13" represents the enter key

// user clicks button to submit initials

// user clicks button to start quiz
