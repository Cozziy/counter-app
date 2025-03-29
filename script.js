let count = 0;
const countDisplay = document.getElementById("count");
const savedDisplay = document.getElementById("saved-count");

//Increment
document.getElementById("increment").addEventListener("click", () => {
  count++;
  updateCounter();
});

//Decrement
document.getElementById("decrement").addEventListener("click", () => {
  count--;
  updateCounter();
});

// Save (localStorage)

document.getElementById("save").addEventListener("click", () => {
  localStorage.setItem("savedCount", count);
  savedDisplay.textContent = count;
});

//load saved count

window.addEventListener("load", () => {
  const saved = localStorage.getItem("savedCount");
  if (saved) savedDisplay.textContent = saved;
});

//reset

document.getElementById("reset").addEventListener("click", () => {
  localStorage.removeItem("savedCount");
  savedDisplay.textContent = "None yet";
});

//warning js function
function updateCounter() {
  countDisplay.textContent = count;

  // warning logic
  const warningElement = document.getElementById("warning");

  if (count < 0) {
    warningElement.textContent = "⚠ Warning: number is negative.";
    warningElement.classList.add("show");
    playWarningSount();
    //vibration
    if ("vibrate" in navigator) {
      navigator.vibrate(200);
    }
  } else {
    warningElement.classList.remove("show"); //clear on positive
    //confetti
    if (count >= 10) launchConfetti();
  }
}

// sound
function playWarningSount() {
  const audio = new Audio("alert.mp3");
  audio.volume = 0.3;
  audio.play();
}

//confeti function

function launchConfetti() {
    confetti( {
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6}
    });
}