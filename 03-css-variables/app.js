const inputs = document.querySelectorAll('.controls input');
console.log(inputs);

function handleUpdate() {
  // console.log(this.dataset);
  // The units come from a data-sizing attribute on the input element
  const suffix = this.dataset.sizing || '';

  // Insert these variables as an inline style on the root html element.
  // These variables override (in the cascade) the defaults set in style.css
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// Trigger handler when control changes, or as the mouse is moving it
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
