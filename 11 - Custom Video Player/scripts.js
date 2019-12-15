const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

const toggle = document.querySelector('.toggle');
const size = document.querySelector('.size');
const skipButtons = Array.from(document.querySelectorAll('[data-skip]'));
const ranges = Array.from(document.querySelectorAll('.player__slider'));

let mouseDown = false;

function togglePlay() {
  if (video.paused) video.play();
  else video.pause();
}

function toggleSize() {
  if (this.dataset.size === 'minimized') {
    this.dataset.size = 'maximized';
    this.textContent = '🗕';
    player.style.width = '100%';
    player.style.maxWidth = '100%';
  } else {
    this.dataset.size = 'minimized';
    this.textContent = '🗖';
    player.style.width = '';
    player.style.maxWidth = '750px;';
  }
}

function updatePlayButton() {
  const symbol = this.paused ? '►' : '❚❚';
  toggle.textContent = symbol;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function setRange() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (this.currentTime / this.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubPercent = (e.offsetX / progress.offsetWidth) * 100;
  video.currentTime = (video.duration * scrubPercent) / 100;
}

// Play/pause the video when the toggle button or video is clicked
toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);

// Change the toggle button symbol when the video is playing/paused
video.addEventListener('play', updatePlayButton);
video.addEventListener('pause', updatePlayButton);

// Skip forward or back when the skip buttons are clicked
skipButtons.forEach(skipButton => skipButton.addEventListener('click', skip));

// Set the video volume/playback rate on range input change
ranges.forEach(range => range.addEventListener('change', setRange));

// Set the progress bar progress
video.addEventListener('timeupdate', handleProgress);

// Minimize/maximize the player on click
size.addEventListener('click', toggleSize);

// Set the video time on progress bar seek
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', e => mouseDown && scrub(e));
progress.addEventListener('mousedown', () => (mouseDown = true));
progress.addEventListener('mouseup', () => (mouseDown = false));
