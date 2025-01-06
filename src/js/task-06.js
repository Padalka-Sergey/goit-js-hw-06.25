const inputRef = document.querySelector('input');

inputRef.addEventListener('blur', checkInput);
inputRef.addEventListener('input', deleteClass);

function checkInput(evt) {
  if (
    Number(inputRef.dataset.length) === Number(evt.currentTarget.value.length)
  ) {
    inputRef.classList.add('valid');
    return;
  }
  if (evt.currentTarget.value === '') {
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
