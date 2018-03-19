const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  // this class will 'open' the panel, making it the feature
  this.classList.toggle('open');
}

function toggleActive(e) {
  console.log(e.propertyName);
  // activate only from the flex/flex-grow transition that happens
  // after the .open class is added to the panel.
  if(e.propertyName.includes('flex')) {
    // this class will bring in the extra words
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));