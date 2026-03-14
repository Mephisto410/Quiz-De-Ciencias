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
    },
    {
        question: "¿Qué ocurre en una mutación por inversión?", 
        answers: {
            a: "Un segmento del cromosoma se rompe y se orienta en sentido contrario",
            b: "Se pierde una parte del cromosoma",
            c: "Se duplica una parte del material genético"
        },
        correctAnswer: "a"
    },
    {
        question: "La herencia en la que el fenotipo del heterocigoto es una mezcla intermedia se llama:", 
        answers: {
            a: "Dominancia completa",
            b: "Dominancia incompleta",
            c: "Codominancia"
        },
        correctAnswer: "b"
    },
    {
        question: "¿Cuál es un ejemplo de alelos múltiples en humanos?", 
        answers: {
            a: "El color de los ojos",
            b: "Los grupos sanguíneos ABO",
            c: "La estatura"
        },
        correctAnswer: "b"
    },
    {
        question: "¿Qué es la pleiotropía?", 
        answers: {
            a: "Cuando muchos genes afectan un solo rasgo",
            b: "Cuando un solo gen afecta múltiples rasgos diferentes",
            c: "Cuando un gen no tiene efecto alguno"
        },
        correctAnswer: "b"
    },
    {
        question: "En la herencia ligada al sexo, ¿quiénes suelen ser portadoras pero no expresar la enfermedad?", 
        answers: {
            a: "Las mujeres (XX)",
            b: "Los hombres (XY)",
            c: "Ambos por igual"
        },
        correctAnswer: "a"
    },
    {
        question: "¿Qué sucede en una mutación por deleción?", 
        answers: {
            a: "Se gana un fragmento de ADN",
            b: "Se pierde un fragmento de cromosoma",
            c: "El ADN se mueve a otro cromosoma"
        },
        correctAnswer: "b"
    },
    {
        question: "La herencia mitocondrial se transmite exclusivamente a través de:", 
        answers: {
            a: "El padre",
            b: "La madre",
            c: "Ambos padres"
        },
        correctAnswer: "b"
    },
    {
        question: "¿Cómo se llaman las mutaciones que ocurren en las células que producen óvulos o espermatozoides?", 
        answers: {
            a: "Mutaciones somáticas",
            b: "Mutaciones germinales",
            c: "Mutaciones neutras"
        },
        correctAnswer: "b"
    },
    {
        question: "Si un individuo tiene dos alelos diferentes para un mismo gen (Aa), se dice que es:", 
        answers: {
            a: "Homocigoto",
            b: "Heterocigoto",
            c: "Recesivo"
        },
        correctAnswer: "b"
    },
    {
        question: "¿Qué tipo de mutación no altera la función de la proteína resultante?", 
        answers: {
            a: "Mutación nociva",
            b: "Mutación neutra",
            c: "Mutación benéfica"
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