const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    // Add more questions here
];

const quizContainer = document.getElementById("quiz");
const submitBtn = document.getElementById("submitBtn");
let score = 0;

function displayQuiz() {
    let quizHTML = "";

    quizData.forEach((questionData, index) => {
        const optionsHTML = questionData.options
            .map((option, optionIndex) => `
                <label>
                    <input type="radio" name="question${index}" value="${option}">
                    ${option}
                </label>
            `)
            .join("");

        quizHTML += `
            <div class="question">
                <p>${questionData.question}</p>
                ${optionsHTML}
            </div>
        `;
    });

    quizContainer.innerHTML = quizHTML;
}

function calculateScore() {
    score = 0;
    quizData.forEach((questionData, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);

        if (selectedOption) {
            if (selectedOption.value === questionData.answer) {
                score++;
            }
        }
    });
}

function showResults() {
    calculateScore();
    alert(`Your score is: ${score} out of ${quizData.length}`);
}

displayQuiz();
submitBtn.addEventListener("click", showResults);
