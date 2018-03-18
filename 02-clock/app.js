const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const initialDate = new Date();
var secondTally = initialDate.getSeconds();
var minuteTally = initialDate.getMinutes();
var hourTally = initialDate.getHours();

function tickClock() {
  // Always monotonically increment s/m/h so that the angle increases
  // monotoically. This way the css transitions are continuous.
  // The edge case is if the clock is loaded exactly at the top of the hour,
  // then the clock would be ahead :(
  secondTally += 1;
  const now = new Date();
  if (now.getSeconds() === 0) {
    minuteTally += 1;
  }
  if (now.getMinutes() === 0 && now.getSeconds === 0) {
    hourTally += 1;
    console.log('hour increment');
  }

  const secondsDegrees = (secondTally / 60) * 360 + 90;
  const minutesDegrees = (minuteTally / 60) * 360 + 90;
  const hoursDegrees = (hourTally / 12) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

// update the clock face every second (1000 milliseconds)
setInterval(tickClock, 1000);
