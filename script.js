const gameContainer = document.getElementById("gameContainer");
const timeLeftEl = document.getElementById("timeLeft");
const timerIcon = document.getElementById("timerIcon");
const randomButton = document.getElementById("randomButton");
const soundToggleButton = document.getElementById("soundToggleButton");

let timeLeft = 10;
let isTimerRunning = false;
let selectedCardIndex = null;
let usedIndices = [];
let intervalRef = null;
let isSoundOn = true;
let currentAudio = null;
let pendingFlipCardEl = null; 
let isInstantFlipMode = true;

soundToggleButton.addEventListener("click", () => {
  isSoundOn = !isSoundOn;
  soundToggleButton.textContent = isSoundOn ? "🔊" : "🔇";
  soundToggleButton.classList.toggle("muted", !isSoundOn);

  if (currentAudio) {
    currentAudio.muted = !isSoundOn;
  }
});

const instantFlipToggleButton = document.getElementById("instantFlipToggleButton");
instantFlipToggleButton.textContent = "⚡ Hızlı Mod";

instantFlipToggleButton.addEventListener("click", () => {
  isInstantFlipMode = !isInstantFlipMode;
  instantFlipToggleButton.textContent = isInstantFlipMode ? "⚡ Hızlı Mod" : "⏳ Zamanlı Mod";

  if (isInstantFlipMode) {
    if (currentAudio) {
      currentAudio.pause(); 
      currentAudio.currentTime = 0; 
    }

    clearInterval(intervalRef);  
    isTimerRunning = false;
    timeLeft = 10; 
    timeLeftEl.textContent = timeLeft;
    timeLeftEl.classList.remove("low-time");

    if (pendingFlipCardEl && pendingFlipCardEl.dataset.flipped === "false") {
      pendingFlipCardEl.classList.add("flipped");
      pendingFlipCardEl.dataset.flipped = "true";
    }

    pendingFlipCardEl = null; 
  }
});

const renderCards = () => {
  gameContainer.innerHTML = "";
  cardsData.forEach((card, index) => {
    const cardEl = document.createElement("div");
    cardEl.className = "card";
    if (selectedCardIndex === index) cardEl.classList.add("highlighted");
    if (selectedCardIndex !== null && selectedCardIndex !== index) cardEl.classList.add("blurred");

    const inner = document.createElement("div");
    inner.className = "card-inner";

    const front = document.createElement("div");
    front.className = "card-front";
    front.innerHTML = `
      <div class="card-title ${selectedCardIndex === index ? "highlighted-text" : ""}">${card.name}</div>
      ${card.image ? `<img src="${card.image}" class="card-image" alt="${card.name}" />` : ""}
    `;
    
    const back = document.createElement("div");
    back.className = "card-back";
    back.innerHTML = card.description;

    inner.appendChild(front);
    inner.appendChild(back);
    cardEl.appendChild(inner);
    gameContainer.appendChild(cardEl);

    cardEl.dataset.flipped = "false"; 

    cardEl.addEventListener("click", (e) => {
      e.stopPropagation();
    
      if (cardEl.dataset.flipped === "true") {
        cardEl.classList.remove("flipped");
        cardEl.dataset.flipped = "false";
        return;
      }

      if (isInstantFlipMode) {
        cardEl.classList.add("flipped");
        cardEl.dataset.flipped = "true";
      } else {
        if (isTimerRunning) return;
        pendingFlipCardEl = cardEl;
        startTimer();
      }
    });
  });
};

const startTimer = () => {
  if (isTimerRunning || !pendingFlipCardEl) return;

  timeLeft = 10;
  isTimerRunning = true;
  timeLeftEl.textContent = timeLeft;
  timeLeftEl.classList.remove("low-time");

  currentAudio = new Audio("sounds/sound.mp3");
  currentAudio.volume = 1;
  currentAudio.muted = !isSoundOn;
  currentAudio.play().catch((err) => console.warn("Ses çalma hatası:", err));

  intervalRef = setInterval(() => {
    timeLeft--;
    timeLeftEl.textContent = timeLeft;

    if (timeLeft <= 3) {
      timeLeftEl.classList.add("low-time");
    }

    if (timeLeft === 0) {
      clearInterval(intervalRef);
      isTimerRunning = false;
      timeLeftEl.classList.remove("low-time");
      timerIcon.classList.add("top-timer");
      setTimeout(() => timerIcon.classList.remove("top-timer"), 500);

      if (pendingFlipCardEl && pendingFlipCardEl.dataset.flipped === "false") {
        pendingFlipCardEl.classList.add("flipped");
        pendingFlipCardEl.dataset.flipped = "true";
      }

      pendingFlipCardEl = null;
      currentAudio = null;
    }
  }, 1000);
};

randomButton.addEventListener("click", () => {
  if (isTimerRunning) return;

  randomButton.classList.add("roll");
  setTimeout(() => randomButton.classList.remove("roll"), 600);

  let remaining = cardsData.map((_, i) => i).filter(i => !usedIndices.includes(i));
  if (remaining.length === 0) {
    usedIndices = [];
    remaining = cardsData.map((_, i) => i);
  }

  const randomIndex = remaining[Math.floor(Math.random() * remaining.length)];
  selectedCardIndex = randomIndex;
  usedIndices.push(randomIndex);

  renderCards();

  setTimeout(() => {
    const selectedCard = document.querySelectorAll(".card")[randomIndex];
    selectedCard.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 300);
});

document.addEventListener("click", (event) => {
  if (
    event.target.closest(".card") ||
    event.target.closest(".random-button") ||
    event.target.closest("#soundToggleButton")
  ) {
    return;
  }
  selectedCardIndex = null;
  renderCards();
});

renderCards();