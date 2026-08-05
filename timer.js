const [startBtn, pauseBtn, resetBtn] =
  document.querySelectorAll(".buttons button");
const [hourEl, minEl, secEl] = document.querySelectorAll(".main .timer");

let seconds = 0;
let mins = 0;
let hours = 0;
let time = null;

const formatTime = (val) => String(val).padStart(2, "0");

const updateDisplay = () => {
  secEl.textContent = formatTime(seconds);
  minEl.textContent = formatTime(mins);
  hourEl.textContent = formatTime(hours);
};

startBtn.addEventListener("click", () => {
  if (time) return;

  time = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      mins++;
      if (mins === 60) {
        mins = 0;
        hours++;
      }
    }
    updateDisplay();
  }, 0.01);
});

pauseBtn.addEventListener("click", () => {
  clearInterval(time);
  time = null;
  pauseBtn.disabled = true;
  startBtn.disabled = false;
});

resetBtn.addEventListener("click", () => {
  clearInterval(time);
  time = null;
  seconds = 0;
  mins = 0;
  hours = 0;
  updateDisplay();
  startBtn.disabled = false;
  pauseBtn.disabled = true;
});

updateDisplay();
