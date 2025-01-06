const inputRef = document.querySelector('input');

inputRef.addEventListener('blur', checkInput);
inputRef.addEventListener('input', deleteClass);

function checkInput(evt) {
  const dataLength = Number(inputRef.dataset.length);
  const currentValueLength = Number(evt.currentTarget.value.length);
  const currentValue = evt.currentTarget.value;

  if (dataLength === currentValueLength) {
    inputRef.classList.add('valid');
    return;
  }
  if (currentValue === '') {
    inputRef.classList.remove('invalid');
    return;
  }
  inputRef.classList.add('invalid');
}

function deleteClass() {
  if (inputRef.classList.contains('invalid')) {
    inputRef.classList.remove('invalid');
    return;
  }
  inputRef.classList.remove('valid');
}
