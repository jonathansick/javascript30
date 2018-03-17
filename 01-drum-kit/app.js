function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"`);
  console.log(key);
  if(!audio) return; // abort function if no corresponding sound

  audio.currentTime = 0; // rewind to start if already playing
  audio.play();

  // Add styling to the played key
  key.classList.add('playing');
}

function removeTransition(e) {
  // only listen to the 'transform' transition. This function gets called for
  // the individual transitions of each css property.
  if (e.propertyName != 'transform') return;
  // `this` is the .key div; from the event listener
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');

// transitionend event is fired when a css transition ends
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
