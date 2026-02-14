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

window.addEventListener("load", function() {
    setTimeout(() => {
        alert("Happy Valentine’s Day nada'm 💙 my Forever .");
    }, 1500);
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
const title = document.getElementById("loveTitle");
const secret = document.getElementById("secretMessage");

const message = "You are the best thing that ever happened to me. I choose you. Always. 💙";

let typing = false;

title.addEventListener("click", function () {

    if (typing) return;

    secret.textContent = "";
    typing = true;

    let i = 0;

    function typeWriter() {
        if (i < message.length) {
            secret.textContent += message.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        } else {
            typing = false;
        }
    }

    typeWriter();
});

/* Puzzle Container */
.puzzle-container {
    width: 300px;
    height: 300px;
    margin: 20px auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3px;
}

/* Tiles */
.puzzle-tile {
    background-size: 300px 300px;
    cursor: pointer;
    transition: 0.2s ease;
}

.empty {
    background: #fff;
    cursor: default;
}

/* Info */
.puzzle-info {
    display: flex;
    justify-content: space-between;
    width: 300px;
    margin: 10px auto;
    font-weight: 600;
    color: #e11d48;
}

/* Restart Button */
.restart-btn {
    margin-top: 15px;
    padding: 8px 16px;
    border: none;
    background: #e11d48;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3s;
}

.restart-btn:hover {
    background: #be123c;
}

/* Dropdown */
.photo-select {
    margin: 10px 0;
    padding: 6px 10px;
    border-radius: 5px;
    border: 1px solid #e11d48;
    color: #e11d48;
    font-weight: 600;
}

/* Thumbnails */
.thumbnail-container {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-bottom: 10px;
}

.thumb {
    width: 60px;
    height: 60px;
    object-fit: cover;
    cursor: pointer;
    border-radius: 6px;
    transition: 0.3s;
}

.thumb:hover {
    transform: scale(1.1);
}

.locked {
    filter: grayscale(100%);
    opacity: 0.5;
    cursor: not-allowed;
}

/* Secret Message */
.secret-message {
    margin-top: 15px;
    font-size: 1.1rem;
    color: #e11d48;
}

/* Glow Effect */
.glow {
    box-shadow: inset 0 0 200px rgba(225, 29, 72, 0.3);
    transition: 1s ease;
}

