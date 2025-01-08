const inputRef = document.querySelector('input[type="number"]');
const createBtnRef = document.querySelector('button[data-create]');
const destroyBtnRef = document.querySelector('button[data-destroy]');
const boxRef = document.querySelector('#boxes');

let amount = null;
inputRef.addEventListener('input', inputValueHandler);
createBtnRef.addEventListener('click', createBoxes);
destroyBtnRef.addEventListener('click', destroyHandler);

function inputValueHandler() {
  amount = Number(inputRef.value);
}

function createBoxes() {
  destroyHandler();
  for (let idx = 1; idx <= amount; idx += 1) {
    const markup = `<div style="background-color: ${getRandomHexColor()}; width: ${
      30 + idx * 10
    }px; height: ${30 + idx * 10}px; margin-top: 10px"></div>`;
    boxRef.insertAdjacentHTML('beforeend', markup);
  }
}

function destroyHandler() {
  boxRef.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
