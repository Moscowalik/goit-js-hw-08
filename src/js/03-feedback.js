import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const email = formRef.email;
const message = formRef.message;

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onTextAreaInput, 500));

populateFormOutput();

function onTextAreaInput(e) {
  const inputData = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(inputData));
}

function onFormSubmit(e) {
  e.preventDefault();
  if (formRef.email.value === '' || formRef.message.value === '') {
    alert('Кроме тебя поля никто не заполнит(((');
    return;
  }
  const dataSubmit = {
    email: e.currentTarget.email.value,
    massage: e.currentTarget.message.value,
  };
  console.log(dataSubmit);

  e.currentTarget.reset();
}

function populateFormOutput() {
  const populateForm = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (!populateForm) {
    return;
  }

  if (populateForm.email) {
    formRef.email.value = populateForm.email;
  }
  if (populateForm.message) {
    formRef.message.value = populateForm.message;
  }
}
