// Engagement Counter 

// Simple password protection
(function() {
    const password = "25122025"; // set your password here
    const userInput = prompt("Enter password to access our page 💙:");
    if(userInput !== password) {
        alert("Incorrect password! Goodbye 💔");
        document.body.innerHTML = "<h1 style='text-align:center; margin-top:50px; color:red;'>Access Denied 💔</h1>";
    }
})();

const nadaName = document.getElementById("nadaName");
const secretBox = document.getElementById("secretMessageBox");
const secretText = document.getElementById("secretMessageText");

nadaName.addEventListener("click", () => {
    secretBox.style.display = "block"; // show the hidden card
    secretText.textContent = "💖 Hey Nada, I love you endlessly 💖";
});


function updateEngagementCounter() {
    const engagementDate = new Date("2025-12-25T19:00:00");
    const now = new Date();
    const diff = now - engagementDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("engagementCounter").textContent =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
setInterval(updateEngagementCounter, 1000);
updateEngagementCounter();

// Open When Letters
function openLetter(type) {
    const letterText = document.getElementById("letterText");
    if(type === 'sad') {
        letterText.textContent = "Don't be sad, my love 💙 I'm always with you!";
    } else if(type === 'miss') {
        letterText.textContent = "I miss you too 💙 Counting every moment until we meet!";
    } else if(type === 'happy') {
        letterText.textContent = "Yay! Keep smiling 💙 You make me happiest!";
    }
}

/* ===============================
   MEMORY QUIZ
================================= */

const quizQuestions = [
    {
        question: "What date did we first meet?",
        options: ["12/12/2024", "01/01/2024", "15/06/2024", "25/12/2025"],
        correct: 0
    },
    {
        question: "When did we get engaged?",
        options: ["15/12/2025", "25/12/2025", "01/01/2026", "08/01/2026"],
        correct: 1
    },
    {
        question: "What is my favorite thing about you?",
        options: ["Your eyes", "Your beautiful cheeks 💙", "Your sense of humor", "Your kindness"],
        correct: 1
    },
    {
        question: "Where do I like to steal kisses from?",
        options: ["Your hands", "Your beautiful cheeks", "Your forehead", "Your lips"],
        correct: 1
    },
    {
        question: "What song means the most to us?",
        options: ["رۆ‌حی خۆم", "ئەحە گیان", "چەندین گەڕام", "سوغاتی"],
        correct: 0
    },
    {
        question: "How do I describe forever with you?",
        options: ["Just a dream", "No matter the distance, no matter the time, you will always be my forever 💙", "Something temporary", "A beautiful lie"],
        correct: 1
    },
    {
        question: "When did we become officially formal? (from the memories)",
        options: ["25/12/2025", "08/01/2026", "12/12/2024", "01/01/2026"],
        correct: 1
    },
    {
        question: "Who thought they were unbeatable until meeting me?",
        options: ["You did", "I did", "We both did", "Nobody"],
        correct: 1
    },
    {
        question: "What do I call you when I click on the title?",
        options: ["Sweetheart", "My love", "Hey Nada, I love you endlessly 💖", "My precious"],
        correct: 2
    },
    {
        question: "What is our engagement date again? (confirm your knowledge)",
        options: ["25 / 12 / 2025 - 7:00 PM", "24 / 12 / 2025", "26 / 12 / 2025", "01 / 01 / 2026"],
        correct: 0
    },
    // Romantic & Emotional Questions
    {
        question: "What makes my heart skip a beat the most?",
        options: ["Your laugh", "When you look into my eyes", "Your smile 💙", "Your touch"],
        correct: 2
    },
    {
        question: "If I could spend forever doing one thing with you, what would it be?",
        options: ["Traveling the world", "Just being in your presence, no matter where", "Dancing together", "Having adventures"],
        correct: 1
    },
    {
        question: "What is the most romantic moment we could share?",
        options: ["Under the stars", "Watching the sunset while holding you close", "Dancing in the rain", "A quiet moment just for us"],
        correct: 1
    },
    {
        question: "When I think of our future, what do I see?",
        options: ["Uncertainty", "Everything I've ever dreamed of with you by my side", "Just another relationship", "A temporary happiness"],
        correct: 1
    },
    {
        question: "What color best represents your love for me?",
        options: ["Red", "Purple 💜", "Blue 💙", "Gold"],
        correct: 2
    },
    {
        question: "How deeply do I love you?",
        options: ["A little bit", "More than words can express 💙", "Sometimes", "Not sure yet"],
        correct: 1
    },
    {
        question: "What is the most precious thing to me?",
        options: ["Money", "Success", "My time with you 💙", "My dreams"],
        correct: 2
    },
    {
        question: "If I could give you one thing, what would it be?",
        options: ["The world", "My heart, completely and forever", "Riches", "Power"],
        correct: 1
    },
    {
        question: "What makes you my soulmate?",
        options: ["We just clicked", "Everything about you - mind, heart, and soul", "Perfect timing", "Destiny brought us together"],
        correct: 1
    },
    {
        question: "In my heart, you are...",
        options: ["Just another person", "The one, my forever love 💙", "My best friend", "My greatest adventure"],
        correct: 1
    },
    {
        question: "What do I want to build with you?",
        options: ["Just a fling", "A love story that lasts forever", "A temporary escape", "Nothing serious"],
        correct: 1
    },
    {
        question: "How do I feel when I see you smile?",
        options: ["Nothing special", "Like my world is complete 💙", "Indifferent", "Confused"],
        correct: 1
    },
    {
        question: "What is your love language to me?",
        options: ["Words of affirmation", "Physical touch & acts of service", "Quality time & presence", "All of the above 💙"],
        correct: 3
    },
    {
        question: "What am I willing to do for you?",
        options: ["Just the basics", "Everything in my power", "Something when convenient", "Very little"],
        correct: 1
    },
    {
        question: "In every lifetime, would I choose you again?",
        options: ["Maybe", "Yes, a thousand times over 💙", "Probably not", "Only in this one"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    displayQuestion();
}

function displayQuestion() {
    const quizContent = document.getElementById("quizContent");
    const scoreDisplay = document.getElementById("scoreDisplay");
    
    if(currentQuestion < quizQuestions.length) {
        scoreDisplay.style.display = "none";
        const q = quizQuestions[currentQuestion];
        let html = `<div class="quiz-progress">Question ${currentQuestion + 1} of ${quizQuestions.length}</div>`;
        html += `<div class="quiz-question"><p>${q.question}</p><div class="quiz-options">`;
        
        q.options.forEach((option, index) => {
            html += `<button class="quiz-btn" onclick="answerQuestion(${index})">${option}</button>`;
        });
        
        html += `</div></div>`;
        quizContent.innerHTML = html;
    } else {
        showScore();
    }
}

function answerQuestion(selected) {
    const q = quizQuestions[currentQuestion];
    const buttons = document.querySelectorAll(".quiz-btn");
    
    if(selected === q.correct) {
        score++;
        buttons[selected].classList.add("correct");
    } else {
        buttons[selected].classList.add("incorrect");
        buttons[q.correct].classList.add("correct");
    }
    
    buttons.forEach(btn => btn.disabled = true);
    
    setTimeout(() => {
        currentQuestion++;
        displayQuestion();
    }, 1500);
}

function showScore() {
    document.getElementById("quizContent").style.display = "none";
    document.getElementById("scoreDisplay").style.display = "block";
    document.getElementById("finalScore").textContent = score;
}

function restartQuiz() {
    document.getElementById("quizContent").style.display = "block";
    document.getElementById("scoreDisplay").style.display = "none";
    startQuiz();
}

// Initialize quiz when page loads
window.addEventListener("load", () => {
    startQuiz();
});

// Music Toggle
function toggleMusic() {
    const music = document.getElementById("bgMusic");
    if(music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

// Scroll Fade-in Effect
function scrollFade() {
    const elements = document.querySelectorAll('.scroll-fade');
    const windowHeight = window.innerHeight;
    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if(elementTop < windowHeight - 100) {
            el.classList.add('show');
        }
    });
}
window.addEventListener('scroll', scrollFade);
window.addEventListener('load', scrollFade);


function toggleMusic() {
    const music = document.getElementById("bgMusic");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}


// Song Selector
const selector = document.getElementById('songSelector');
const player = document.getElementById('audioPlayer');

selector.addEventListener('change', () => {
    player.src = selector.value;
    player.play();
});



     
       // ===============================
// ADVANCED PUZZLE GAME
// ===============================

const board = document.getElementById("puzzleBoard");
const shuffleBtn = document.getElementById("shuffleBtn");
const imageSelector = document.getElementById("imageSelector");
const winMessage = document.getElementById("winMessage");
const moveCounterEl = document.getElementById("moveCounter");
const timerEl = document.getElementById("timer");

const size = 3;
let tiles = [];
let state = [];
let moves = 0;
let timer = 0;
let timerInterval = null;

function startTimer() {
    clearInterval(timerInterval);
    timer = 0;
    timerEl.textContent = timer;
    timerInterval = setInterval(() => {
        timer++;
        timerEl.textContent = timer;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function createSolvedState() {
    state = [];
    for (let i = 0; i < size * size; i++) {
        state.push(i);
    }
}

function createBoard(imageSrc) {
    board.innerHTML = "";
    tiles = [];

    for (let i = 0; i < size * size; i++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");

        if (i === size * size - 1) {
            tile.classList.add("empty");
        } else {
            const x = (i % size) * -120;
            const y = Math.floor(i / size) * -120;
            tile.style.backgroundImage = `url(${imageSrc})`;
            tile.style.backgroundPosition = `${x}px ${y}px`;
        }

        tile.dataset.value = i;
        tile.addEventListener("click", () => moveTile(i));
        tiles.push(tile);
        board.appendChild(tile);
    }

    createSolvedState();
    moves = 0;
    moveCounterEl.textContent = moves;
    winMessage.textContent = "";
    stopTimer();
}

function render() {
    board.innerHTML = "";
    state.forEach(value => {
        board.appendChild(tiles[value]);
    });
}

function getEmptyIndex() {
    return state.indexOf(size * size - 1);
}

function isAdjacent(i1, i2) {
    const r1 = Math.floor(i1 / size);
    const c1 = i1 % size;
    const r2 = Math.floor(i2 / size);
    const c2 = i2 % size;
    return Math.abs(r1 - r2) + Math.abs(c1 - c2) === 1;
}

function moveTile(index) {
    const tilePos = state.indexOf(index);
    const emptyPos = getEmptyIndex();

    if (isAdjacent(tilePos, emptyPos)) {
        [state[tilePos], state[emptyPos]] =
            [state[emptyPos], state[tilePos]];

        render();

        moves++;
        moveCounterEl.textContent = moves;

        if (moves === 1) startTimer();

        if (checkWin()) {
            stopTimer();
winMessage.textContent = "🎉 Congratulations! You solved it perfectly 💙";
winMessage.classList.add("show");
            launchConfetti();
        }
    }
}

function shuffle() {
    for (let i = 0; i < 200; i++) {
        const emptyPos = getEmptyIndex();
        const neighbors = state
            .map((_, i) => i)
            .filter(i => isAdjacent(i, emptyPos));

        const rand =
            neighbors[Math.floor(Math.random() * neighbors.length)];
winMessage.classList.remove("show");
        [state[rand], state[emptyPos]] =
            [state[emptyPos], state[rand]];
    }

    render();
    moves = 0;
    moveCounterEl.textContent = moves;
    winMessage.textContent = "";
    stopTimer();
}

function checkWin() {
    return state.every((val, index) => val === index);
}

// Confetti
function launchConfetti() {
    const duration = 2000;
    const end = Date.now() + duration;

    const interval = setInterval(() => {
        if (Date.now() > end) {
            clearInterval(interval);
            return;
        }

        const confetti = document.createElement("div");
        confetti.style.position = "fixed";
        confetti.style.width = "8px";
        confetti.style.height = "8px";
        confetti.style.background = `hsl(${Math.random()*360},100%,50%)`;
        confetti.style.left = Math.random()*100 + "vw";
        confetti.style.top = "-10px";
        confetti.style.opacity = "1";
        confetti.style.pointerEvents = "none";
        confetti.style.transition = "transform 2s linear, opacity 2s";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.style.transform = "translateY(100vh)";
            confetti.style.opacity = "0";
        }, 10);

        setTimeout(() => confetti.remove(), 2000);

    }, 20);
}

// Events
shuffleBtn.addEventListener("click", shuffle);

imageSelector.addEventListener("change", function () {
    createBoard(this.value);
    render();
});

// Init
createBoard(imageSelector.value);
render();


document.addEventListener("DOMContentLoaded", function () {

    const countdownEl = document.getElementById("messageCountdown");
    const loveMessageEl = document.getElementById("loveMessage");
    const timeLabel = document.getElementById("timeLabel");

    // Show expired look immediately
    countdownEl.innerText = " you are the most amazing thing little precious ";

    loveMessageEl.innerText =
        " I LOVE YOU 💙";

    // hide countdown label
    if(timeLabel){
        timeLabel.style.display = "none";
    }

});
