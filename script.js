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

soundToggleButton.addEventListener("click", () => {
  isSoundOn = !isSoundOn;
  soundToggleButton.textContent = isSoundOn ? "🔊" : "🔇";
  soundToggleButton.classList.toggle("muted", !isSoundOn);

  if (currentAudio) {
    currentAudio.muted = !isSoundOn;
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
    front.textContent = card.name;
    if (selectedCardIndex === index) front.classList.add("highlighted-text");

    const back = document.createElement("div");
    back.className = "card-back";
    back.innerHTML = `${card.description}${card.image ? `<img src="${card.image}" class="card-image" alt="${card.name}" />` : ""}`;

    inner.appendChild(front);
    inner.appendChild(back);
    cardEl.appendChild(inner);
    gameContainer.appendChild(cardEl);

    let flipped = false;

    cardEl.addEventListener("click", (e) => {
      e.stopPropagation();
      if (flipped) {
        flipped = false;
        cardEl.classList.remove("flipped");
        return;
      }
      startTimer(() => {
        flipped = true;
        cardEl.classList.add("flipped");
      });
    });
  });
};

const startTimer = (onFinishFlip) => {
  if (isTimerRunning) return;

  timeLeft = 10;
  isTimerRunning = true;
  timeLeftEl.textContent = timeLeft;

  // Ses başlat
  currentAudio = new Audio("sounds/sound.mp3");
  currentAudio.volume = 1;
  currentAudio.muted = !isSoundOn;
  currentAudio.play();

  intervalRef = setInterval(() => {
    timeLeft--;
    timeLeftEl.textContent = timeLeft;

    if (timeLeft === 0) {
      clearInterval(intervalRef);
      isTimerRunning = false;
      timerIcon.classList.add("top-timer");
      setTimeout(() => timerIcon.classList.remove("top-timer"), 500);
      onFinishFlip();
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
