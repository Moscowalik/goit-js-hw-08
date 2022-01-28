import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const formData = {};
const STORAGE_KEY = 'feedback-form-state';

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onTextAreaInput, 500));

populateFormOutput();

function onTextAreaInput(e) {
  formData[e.target.name] = e.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
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
  localStorage.removeItem(STORAGE_KEY);
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
