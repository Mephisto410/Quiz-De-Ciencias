const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

// --- ADD YOUR QUESTIONS AND ANSWERS HERE ---
const myQuestions = [
    {
        question: "¿Qué tipo de mutación aumenta la probabilidad de supervivencia de un individuo?", 
        answers: {
            a: "Mutaciones neutras",
            b: "Mutaciones benéficas",
            c: "Mutaciones cromosómicas"
        },
        correctAnswer: "b"
    },
    {
        question: "¿Cómo se llama el fenómeno donde los genes se encuentran en el mismo cromosoma y tienden a heredarse juntos?", 
        answers: {
            a: "Ligamiento",
            b: "Recombinación",
            c: "Expresividad"
        },
        correctAnswer: "a"
    },
    {
        question: "Cuando se da el cambio de un solo nucleótido por otro, hablamos de:", 
        answers: {
            a: "Sustitución",
            b: "Inactivación",
            c: "Pleiotropía",
            d: "delección"
        },
        correctAnswer: "a"
    },
    {
        question: "¿Cómo se llama el gen que anula la expresión de otro gen?", 
        answers: {
            a: "Hipostático",
            b: "Codominancia",
            c: "Serie alélica",
            d: "Epistático"
        },
        correctAnswer: "c"
    },
    {
        question: "¿Qué mecanismo permite que las hembras y los machos cuenten con la misma dosis de genes en el cromosoma X?", 
        answers: {
            a: "Herencia mitocondrial",
            b: "Inactivación del cromosoma X",
            c: "Dominancia parcial"
        },
        correctAnswer: "b"
    }
];

function buildQuiz() {
    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} : ${currentQuestion.answers[letter]}
                </label><br>`
            );
        }
        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainers[questionNumber].style.color = 'green';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    resultsContainer.innerHTML = `De los ${myQuestions.length} preguntas, sacaste ${numCorrect} correctas. Tienes un ${0.05 * Math.round((numCorrect / myQuestions.length) * 100)} como tu nota.`;
}

// Initialize the quiz
buildQuiz();

// Event listener for the submit button
submitButton.addEventListener('click', showResults);