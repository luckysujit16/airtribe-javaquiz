// Sample data
const questions = [
    {
        text: "Which language is primarily used for web app development?",
        options: ["C#", "Python", "JavaScript", "Swift"],
        correct: 2
    },
    {
        text: "Which of the following is a relational database management system?",
        options: ["Oracle", "Scala", "Perl", "Java"],
        correct: 0
    },
    {
        text: "What does HTML stand for?",
        options: ["Hyperlink and Text Markup Language", "High Technology Modern Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
        correct: 2
    },
    {
        text: "What does CSS stand for?",
        options: ["Cascading Stylesheets", "Cascading Styling Styles", "Cascading Sheets for Stylings", "Cascaded Stylesheets"],
        correct: 0
    },
    {
        text: "Which of the following is not an object-oriented programming language?",
        options: ["Java", "C#", "Scala", "C"],
        correct: 3
    },
    {
        text: "Which tool is used to ensure code quality in JavaScript?",
        options: ["JSLint", "TypeScript", "Babel", "Webpack"],
        correct: 0
    },
    {
        text: "What is the primary use of the Git command 'clone'?",
        options: ["To stage changes", "To copy a repository", "To switch to a different branch", "To list all the files in a repository"],
        correct: 1
    },
    {
        text: "What does API stand for in the context of programming?",
        options: ["Apple Pie Interface", "Application Programming Interface", "Advanced Peripheral Integration", "Application Process Integration"],
        correct: 1
    },
    {
        text: "Javascript is a single threaded programming language",
        options: ["True", "False"],
        correct: 0
    },
    {
        text: "API calls in Javascript can be done using the following method",
        options: ["setTimeout()", "setInterval()", "fetch()", "get()"],
        correct: 2
    },
];


let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerListElement = document.getElementById("answer-list");
const submitButton = document.getElementById("submit");
const nextButton = document.getElementById("next");

// Load the current question
function loadQuestion() {
    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.text;
    answerListElement.innerHTML = '';

    question.options.forEach((option, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<input type="radio" name="answer" value="${index}"> ${option}`;
        answerListElement.appendChild(listItem);
    });

    // Hide next and show submit
    nextButton.hidden = true;
    submitButton.hidden = false;
}

submitButton.addEventListener("click", () => {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (!selectedAnswer) {
        alert("Please select an answer!");
        return;
    }

    if (parseInt(selectedAnswer.value) === questions[currentQuestionIndex].correct) {
        score++;
    }

    // Highlight the correct answer
    const correctAnswerIndex = questions[currentQuestionIndex].correct;
    answerListElement.children[correctAnswerIndex].style.backgroundColor = "lightgreen";

    // Show next and hide submit
    nextButton.hidden = false;
    submitButton.hidden = true;
});

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert(`Quiz finished! Your score is: ${score}/${questions.length}`);
        // Optionally, reset for a new game
        score = 0;
        currentQuestionIndex = 0;
        loadQuestion();
    }
});

// Load the first question on startup
loadQuestion();