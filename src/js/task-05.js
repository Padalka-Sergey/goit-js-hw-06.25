const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', changeInput);

function changeInput() {
  console.log(inputRef.value);
  if (inputRef.value === '') {
    outputRef.textContent = 'Anonymous';
    return;
  }
  outputRef.textContent = inputRef.value;
}

// ============================================================

// const inputRef = document.querySelector('#name-input');

// const outputRef = document.querySelector('#name-output');

// inputRef.addEventListener('input', changeInput);
// function changeInput(evt) {
//   if (evt.currentTarget.value) {
//     outputRef.textContent = evt.currentTarget.value;
//     return;
//   }
//   outputRef.textContent = 'Anonymous';
// }
