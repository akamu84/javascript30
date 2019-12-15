function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  key.classList.add('playing');
  audio.play();

  const keys = document.querySelectorAll('.key');
  keys.forEach(element => {
    element.addEventListener('transitionend', removeTransition);
  });
}

window.addEventListener('keydown', playSound);
