const questions = [
    { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], answer: 0 },
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: 1 },
    { question: "What is the capital of Spain?", options: ["Madrid", "Barcelona", "Valencia", "Seville"], answer: 0 },
    { question: "What is 3 x 3?", options: ["6", "9", "12", "15"], answer: 1 },
    { question: "What is the largest ocean?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: 2 },
    { question: "What planet is known as the Red Planet?", options: ["Earth", "Venus", "Mars", "Jupiter"], answer: 2 },
    { question: "What is the chemical symbol for water?", options: ["H2O", "O2", "CO2", "HO"], answer: 0 },
    { question: "What is the capital of Italy?", options: ["Rome", "Milan", "Naples", "Venice"], answer: 0 },
    { question: "What is the square root of 16?", options: ["2", "3", "4", "5"], answer: 2 },
    { question: "What is the largest continent?", options: ["Africa", "Asia", "Europe", "America"], answer: 1 },
    { question: "Who wrote 'To Kill a Mockingbird'?", options: ["Harper Lee", "J.K. Rowling", "Jane Austen", "Mark Twain"], answer: 0 },
    { question: "What is the capital of Germany?", options: ["Berlin", "Munich", "Frankfurt", "Hamburg"], answer: 0 },
    { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Fe", "Pb"], answer: 0 },
    { question: "What planet is known as the Blue Planet?", options: ["Earth", "Neptune", "Uranus", "Saturn"], answer: 0 },
    { question: "What is the speed of light?", options: ["299,792 km/s", "300,000 km/s", "150,000 km/s", "1,000,000 km/s"], answer: 1 },
    { question: "What is the capital of Japan?", options: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"], answer: 0 },
    { question: "What is the chemical symbol for silver?", options: ["Ag", "Au", "Fe", "Pb"], answer: 0 },
    { question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"], answer: 2 },
    { question: "What is the capital of Canada?", options: ["Toronto", "Vancouver", "Ottawa", "Montreal"], answer: 2 },
    { question: "What is the boiling point of water?", options: ["90°C", "100°C", "110°C", "120°C"], answer: 1 },
    { question: "What is the currency of the United States?", options: ["Euro", "Dollar", "Pound", "Yen"], answer: 1 },
    { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], answer: 2 },
    { question: "What is the largest desert in the world?", options: ["Sahara", "Gobi", "Arabian", "Kalahari"], answer: 0 },
    { question: "What is the smallest country in the world?", options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"], answer: 1 },
    { question: "What is the chemical symbol for iron?", options: ["Ir", "Fe", "In", "I"], answer: 1 },
    { question: "What is the capital of Brazil?", options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"], answer: 2 },
    { question: "What is the fastest land animal?", options: ["Cheetah", "Lion", "Horse", "Elephant"], answer: 0 },
    { question: "What is the largest mammal?", options: ["Elephant", "Whale", "Shark", "Dinosaur"], answer: 1 },
    { question: "What is the capital of Russia?", options: ["Saint Petersburg", "Moscow", "Kazan", "Sochi"], answer: 1 },
    { question: "What is the chemical symbol for sodium?", options: ["Na", "S", "K", "N"], answer: 0 },
    { question: "What is the longest river in the world?", options: ["Nile", "Amazon", "Yangtze", "Mississippi"], answer: 1 },
    { question: "What is the capital of China?", options: ["Shanghai", "Beijing", "Guangzhou", "Shenzhen"], answer: 1 },
    { question: "What is the largest island in the world?", options: ["Greenland", "New Guinea", "Borneo", "Madagascar"], answer: 0 },
    { question: "What is the capital of India?", options: ["Mumbai", "Delhi", "Kolkata", "Chennai"], answer: 1 },
    { question: "What is the smallest continent?", options: ["Asia", "Europe", "Australia", "Antarctica"], answer: 2 },
    { question: "What is the chemical symbol for carbon?", options: ["C", "Ca", "Cu", "Cl"], answer: 0 },
    { question: "What is the capital of South Korea?", options: ["Seoul", "Busan", "Incheon", "Daegu"], answer: 0 },
    { question: "What is the tallest building in the world?", options: ["Shanghai Tower", "Abraj Al-Bait Clock Tower", "One World Trade Center", "Burj Khalifa"], answer: 3 },
    { question: "What is the capital of Mexico?", options: ["Cancun", "Guadalajara", "Mexico City", "Tijuana"], answer: 2 },
    { question: "What is the smallest ocean?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: 3 },
    { question: "What is the capital of Argentina?", options: ["Buenos Aires", "Córdoba", "Rosario", "Mendoza"], answer: 0 },
    { question: "What is the chemical symbol for potassium?", options: ["K", "P", "Pt", "Po"], answer: 0 },
    { question: "What is the most spoken language in the world?", options: ["English", "Spanish", "Mandarin Chinese", "Hindi"], answer: 2 },
    { question: "What is the capital of Egypt?", options: ["Cairo", "Alexandria", "Giza", "Luxor"], answer: 0 },
    { question: "What is the largest planet in the solar system?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: 2 },
    { question: "What is the capital of Thailand?", options: ["Bangkok", "Phuket", "Chiang Mai", "Pattaya"], answer: 0 },
    { question: "What is the longest wall in the world?", options: ["Berlin Wall", "Hadrian's Wall", "Great Wall of China", "Western Wall"], answer: 2 },
];

const playBtn = document.getElementById('play-btn');
const highscoreBtn = document.getElementById('highscore-btn');
const highscoreDisplay = document.getElementById('highscore-display');
const quizContainer = document.getElementById('quiz');
const homeContainer = document.getElementById('home');
const questionCount = document.getElementById('question-count');
const scoreDisplay = document.getElementById('score');
const questionElement = document.getElementById('question');
const options = document.querySelectorAll('.option');
const gameoverContainer = document.getElementById('gameover');
const restartBtn = document.getElementById('restart-btn');
const goHomeBtns = document.querySelectorAll('#go-home-btn');
const endContainer = document.getElementById('end');
const finalScore = document.getElementById('final-score');
const playAgainBtn = document.getElementById('play-again-btn');
const usernameInput = document.getElementById('username');

let currentQuestion = 0;
let score = 0;
let highScore = 0;

playBtn.addEventListener('click', startQuiz);
highscoreBtn.addEventListener('click', displayHighScore);
goHomeBtns.forEach(btn => btn.addEventListener('click', goHome));
restartBtn.addEventListener('click', restartQuiz);
playAgainBtn.addEventListener('click', restartQuiz);
options.forEach((option, index) => {
    option.addEventListener('click', () => checkAnswer(index));
});

function startQuiz() {
    homeContainer.classList.add('hidden');
    gameoverContainer.classList.add('hidden');
    endContainer.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    currentQuestion = 0;
    score = 0;
    shuffleArray(questions); // Shuffle the questions array
    showQuestion();
}

function displayHighScore() {
    highscoreDisplay.classList.toggle('hidden');
}

function showQuestion() {
    if (currentQuestion < 10) {
        questionCount.textContent = `Question ${currentQuestion + 1}/10`;
        scoreDisplay.textContent = `Score: ${score}`;
        questionElement.textContent = questions[currentQuestion].question;
        options.forEach((option, index) => {
            option.textContent = questions[currentQuestion].options[index];
        });
    } else {
        endQuiz();
    }
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestion].answer) {
        score += 10;
        currentQuestion++;
        showQuestion();
    } else {
        gameOver();
    }
}

function gameOver() {
    quizContainer.classList.add('hidden');
    gameoverContainer.classList.remove('hidden');
}

function endQuiz() {
    quizContainer.classList.add('hidden');
    endContainer.classList.remove('hidden');
    finalScore.textContent = score;
    if (score > highScore) {
        highScore = score;
        document.getElementById('highscore').textContent = highScore;
    }
}

function restartQuiz() {
    startQuiz();
}

function goHome() {
    homeContainer.classList.remove('hidden');
    gameoverContainer.classList.add('hidden');
    endContainer.classList.add('hidden');
    quizContainer.classList.add('hidden');
}

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
