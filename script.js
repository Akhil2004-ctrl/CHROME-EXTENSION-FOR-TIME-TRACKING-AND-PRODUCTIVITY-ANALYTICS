let startTime = null;
let timerInterval = null;
let totalSeconds = 0;

const timerEl = document.getElementById('timer');
const totalEl = document.getElementById('total');

function updateTimerDisplay(seconds) {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  timerEl.textContent = `${hrs}:${mins}:${secs}`;
}

document.getElementById('start').onclick = () => {
  if (!timerInterval) {
    startTime = Date.now() - totalSeconds * 1000;
    timerInterval = setInterval(() => {
      totalSeconds = Math.floor((Date.now() - startTime) / 1000);
      updateTimerDisplay(totalSeconds);
      totalEl.textContent = `${totalSeconds}s`;
    }, 1000);
  }
};

document.getElementById('pause').onclick = () => {
  clearInterval(timerInterval);
  timerInterval = null;
};

document.getElementById('reset').onclick = () => {
  clearInterval(timerInterval);
  timerInterval = null;
  totalSeconds = 0;
  updateTimerDisplay(0);
  totalEl.textContent = `0s`;
};
