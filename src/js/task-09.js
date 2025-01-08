const colorTextRef = document.querySelector('p .color');
const btnRef = document.querySelector('button.change-color');
const bodyRef = document.querySelector('body');

btnRef.addEventListener('click', handlerChangeBcg);

function handlerChangeBcg() {
  colorTextRef.textContent = getRandomHexColor();
  bodyRef.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
