prompt: "The reason we want an array here instead of just an object is so that we can reference is like so: questions[1]",
var questions = [
    {
        prompt: "Where is the JavaScript placed inside an HTML document or page?",
        answerChoices: ["In the <body> and <head> sections.", "In the <meta> section.", "In the <title> section.", "In the <footer> section."],
        answer: "In the <body> and <head> sections."
    },

    {
        prompt: "What is used to execute actions based on a trigger or condition?",
        answerChoices: ["Conditional Statement", "RegExp or Regular Expression", "Boolean Variable", "Event Handlers"],
        answer: "Event Handlers"
    },

    {
        prompt: "What elements are used to test for TRUE or False values stored in variables?",
        answerChoices: ["Trigger readers.", "RegExp or Regular Expressions.", "Conditional statements.", "Comparison and logical operators."],
        answer: "Conditional statements"
    },
    {
        prompt: "What is the name of the statement that is used to exit or end a loop?",
        answerChoices: ["Falter statement", "Close statement", "Conditional statement", "Break statement"],
        answer: "Break statement"
    },
    {
        prompt: "In JavaScript, what element is used to store and manipulate text usually in multiples?",
        answerChoices: ["Strings", "Variables", "Arrays", "Function"],
        answer: "Variables"
    }
];

var score = 0;
var questionIndex = 0;
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");


// TIME PARAMETERS
var secondsLeft = 76;
var secondsLeft = questions.length + 15
var holdInterval = 0;
var penalty = 10;
var ulCreate = document.createElement("ul");

// console.log(secondsLeft)