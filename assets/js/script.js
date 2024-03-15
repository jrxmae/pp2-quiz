// Event listener for after html page loads
document.addEventListener('DOMContentLoaded', function () {
    const challengeButton = document.getElementById('challenge');
    const quizInstructions = document.getElementById('instructions');
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const feedbackContainer = document.getElementById('feedback');

})

// Questions, options to choose from and correct answers
let questions = [{
        number: 1,
        question: "Who is the oldest brother of the three?",
        options: ["Hades", "Zeus", "Poseidon"],
        answer: "Hades",
    },
    {
        number: 2,
        question: "Athena is the Greek goddess of...?",
        options: ["Love", "Wisdom", "the Hunt"],
        answer: "Wisdom",
    },
    {
        number: 3,
        question: "Which god/goddess is the twin of the god Apollo?",
        options: ["Hera", "Aphrodite", "Artemis"],
        answer: "Artemis",
    },
    {
        number: 4,
        question: "Other than being known as the 'god of the sea', what else is Poseidon the god of?",
        options: ["sand", "lightning", "horses"],
        answer: "horses",
    },
    {
        number: 5,
        question: "Who is the king of the gods?",
        options: ["Ares", "Hephaestus", "Zeus"],
        answer: "Zeus",
    },
    {
        number: 6,
        question: "Who is the son of Zeus and Hera?",
        options: ["Atlas", "Eros", "Ares"],
        answer: "Ares",
    },
    {
        number: 7,
        question: "What is Dionysus the god of?",
        options: ["earthquakes", "wine", "the sun"],
        answer: "wine",
    },
    {
        number: 8,
        question: "The word ... comes from the Greek god Pan",
        options: ["pander", "pang", "panic"],
        answer: "panic",
    },
    {
        number: 9,
        question: "Which goddess turned Medusa into a monster with snakes for hair?",
        options: ["Athena", "Atropos", "Nike"],
        answer: "Athena",
    },
    {
        number: 10,
        question: "What was the name of the three-headed dog that guarded the entrance to the underworld?",
        options: ["Sparkles", "Fluffly", "Cerberus"],
        answer: "Cerberus",
    },
];