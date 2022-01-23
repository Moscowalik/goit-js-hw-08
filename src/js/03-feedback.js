import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const formData = [];

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onTextAreaInput, 500));

function onFormSubmit(e) {
  console.log('Submit');
}

function onTextAreaInput(e) {
  formData[e.target.name] = e.target.value;
  console.log(formData);
}
