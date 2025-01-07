const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', handleSubmitForm);

function handleSubmitForm(evt) {
  evt.preventDefault();
  const form = evt.target;
  const email = form.elements.email;
  const password = form.elements.password;
  const obj = {};

  if (email.value === '' || password.value === '') {
    return alert('Все поля нужно заполнить!!!');
  }

  obj[email.name] = email.value;
  obj[password.name] = password.value;
  console.log(obj);

  form.reset();
}
