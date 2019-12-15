function setSeconds() {
  const secondHand = document.querySelector('.second-hand');
  const seconds = (new Date().getSeconds() / 60) * 360 + 90;
  if (seconds === 90) {
    secondHand.classList.remove('hand-transition');
  } else {
    secondHand.classList.add('hand-transition');
  }
  secondHand.style.transform = `rotate(${seconds}deg)`;
}

function setMinutes() {
  const minuteHand = document.querySelector('.min-hand');
  const minutes = (new Date().getMinutes() / 60) * 360 + 90;
  if (minutes === 90) {
    minuteHand.classList.remove('hand-transition');
  } else {
    minuteHand.classList.add('hand-transition');
  }
  minuteHand.style.transform = `rotate(${minutes}deg)`;
}

function setHours() {
  const hourHand = document.querySelector('.hour-hand');
  const hours = (new Date().getHours() / 12) * 360 + 90;
  if (hours === 90) {
    hourHand.classList.remove('hand-transition');
  } else {
    hourHand.classList.add('hand-transition');
  }
  hourHand.style.transform = `rotate(${hours}deg)`;
}

function setTime() {
  setSeconds();
  setMinutes();
  setHours();
}

setInterval(setTime, 1000);
