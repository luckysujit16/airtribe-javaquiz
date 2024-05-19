// Sample questions. DONT touch this data
const questions = [
  {
    text: "Which language is primarily used for web app development?",
    options: ["C#", "Python", "JavaScript", "Swift"],
    correct: 2,
  },
  {
    text: "Which of the following is a relational database management system?",
    options: ["Oracle", "Scala", "Perl", "Java"],
    correct: 0,
  },
  {
    text: "What does HTML stand for?",
    options: [
      "Hyperlink and Text Markup Language",
      "High Technology Modern Language",
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
    ],
    correct: 2,
  },
  {
    text: "What does CSS stand for?",
    options: [
      "Cascading Stylesheets",
      "Cascading Styling Styles",
      "Cascading Sheets for Stylings",
      "Cascaded Stylesheets",
    ],
    correct: 0,
  },
  {
    text: "Which of the following is not an object-oriented programming language?",
    options: ["Java", "C#", "Scala", "C"],
    correct: 3,
  },
  {
    text: "Which tool is used to ensure code quality in JavaScript?",
    options: ["JSLint", "TypeScript", "Babel", "Webpack"],
    correct: 0,
  },
  {
    text: "What is the primary use of the Git command 'clone'?",
    options: [
      "To stage changes",
      "To copy a repository",
      "To switch to a different branch",
      "To list all the files in a repository",
    ],
    correct: 1,
  },
  {
    text: "What does API stand for in the context of programming?",
    options: [
      "Apple Pie Interface",
      "Application Programming Interface",
      "Advanced Peripheral Integration",
      "Application Process Integration",
    ],
    correct: 1,
  },
  {
    text: "Javascript is a single threaded programming language",
    options: ["True", "False"],
    correct: 0,
  },
  {
    text: "API calls in Javascript can be done using the following method",
    options: ["setTimeout()", "setInterval()", "fetch()", "get()"],
    correct: 2,
  },
];

const submitButton = document.getElementById("submit");
const nextButton = document.getElementById("next");
const questionContainer = document.getElementById("question");
const optionsContainer = document.getElementById("answer-list");
let currentQuestionIndex = 0;
let correctCount = 0;
let selectedIndex = submitButton.value;

function loadQuestion() {
  // Load the first question and load subsequent question from this function
  const currentQuestion = questions[currentQuestionIndex];
  questionContainer.textContent = currentQuestion.text;

  optionsContainer.innerHTML = ""; // Clear previous options

  currentQuestion.options.forEach((option, index) => {
    const optionElement = document.createElement("div");
    const submitButton = document.createElement("input");
    submitButton.type = "radio";
    submitButton.name = "answer-list";
    submitButton.value = index;
    submitButton.id = `option${index}`;

    const label = document.createElement("label");
    label.textContent = option;
    label.setAttribute("for", `option${index}`);

    optionElement.appendChild(submitButton);
    optionElement.appendChild(label);

    optionsContainer.appendChild(optionElement);
    nextButton.hidden = true;
    optionsContainer.style.color = "black";
  });
}

function submitAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];

  if (selectedIndex === currentQuestion.correct) {
    // Handle correct answer
    submitButton.disabled = true;
    (optionsContainer.style.color = "green"),
      (optionsContainer.innerHTML =
        "<h4>Congratulations!! Correct Answer!<h4>");
    correctCount++;
    // console.log("Correct! Count = " + correctCount);
    nextButton.hidden = false;
    return correctCount;
  } else {
    // Handle incorrect answer
    submitButton.disabled = true;
    nextButton.hidden = false;
    (optionsContainer.style.color = "red"),
      (optionsContainer.innerHTML = "<h4>Sorry!! Wrong Answer<h4>");
    // console.log("Incorrect!");
  }
}

submitButton.addEventListener("click", () => {
  // Implement the logic when the user clicks on submit button. The answer selected by the user should be validated here with the correct option
  const selectedsubmitButton = document.querySelector(
    'input[name="answer-list"]:checked'
  );
  // console.log(selectedsubmitButton);
  submitAnswer(parseInt(selectedsubmitButton.value));

  // console.log(submitButton.value);
});

nextButton.addEventListener("click", () => {
  // Implement the logic for showing the next question in the questions array. Basic DOM manipulation methods are required here.
  // Also check for quiz completion here as well
  submitButton.disabled = false;
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length && currentQuestionIndex < 9) {
    // console.log("Question Index = " + currentQuestionIndex);
    loadQuestion();
  } else {
    // Quiz completed
    // console.log("Quiz completed!");
    submitButton.hidden = true;
    nextButton.hidden = true;
    questionContainer.hidden = true;

    (optionsContainer.style.color = "green"),
      (optionsContainer.innerHTML =
        "<h2>Thank You!! Quiz Complete <h2>" +
        "<h4>Your Score is : " +
        (correctCount + 1) +
        "</h4>");
  }
});

// Load the first question on startup
loadQuestion();
