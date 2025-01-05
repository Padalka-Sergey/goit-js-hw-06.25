let counterValue = 0;

const btnDecrementRef = document.querySelector(
  'button[data-action="decrement"]'
);
const btnIncrementRef = document.querySelector(
  'button[data-action="increment"]'
);
const txtValueRef = document.querySelector('#value');

btnDecrementRef.addEventListener('click', handleClickDcr);
btnIncrementRef.addEventListener('click', handleClickInc);

function handleClickDcr() {
  counterValue -= 1;
  changeTxt();
}

function handleClickInc() {
  counterValue += 1;
  changeTxt();
}

function changeTxt() {
  txtValueRef.textContent = counterValue;
}
