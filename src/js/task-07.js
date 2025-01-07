const rangeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
rangeRef.addEventListener('input', makeScaleText);

function makeScaleText(evt) {
  const { value } = evt.currentTarget;
  textRef.style.fontSize = `${value}px`;
}
