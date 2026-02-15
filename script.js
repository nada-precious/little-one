// Password Protection
(function () {
    const password = "25122025";
    const userInput = prompt("Enter password to access our page 💙:");

    if (userInput !== password) {
        document.body.innerHTML =
            "<h1 style='text-align:center; margin-top:50px; color:red;'>Access Denied 💔</h1>";
    }
})();

// Engagement Counter
function updateEngagementCounter() {
    const engagementDate = new Date("2025-12-25T19:00:00");
    const now = new Date();
    const diff = now - engagementDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const counter = document.getElementById("engagementCounter");
    if (counter) {
        counter.textContent =
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}

setInterval(updateEngagementCounter, 1000);
updateEngagementCounter();

// Scroll Fade
function scrollFade() {
    const elements = document.querySelectorAll(".scroll-fade");
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", scrollFade);
window.addEventListener("load", scrollFade);

// Song Selector (Safe)
const selector = document.getElementById("songSelector");
const player = document.getElementById("audioPlayer");

if (selector && player) {
    selector.addEventListener("change", () => {
        player.src = selector.value;
        player.play();
    });
}