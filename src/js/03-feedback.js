import throttle from 'lodash.throttle'

const form = document.querySelector('form');
const STORAGE_KEY = 'feedback-form-state';
const formData = {};


const strInStorage = localStorage.getItem(STORAGE_KEY);
const strParsed = JSON.parse(strInStorage);
if(strInStorage) {
  
  form.email.value = strParsed.email;
  form.message.value = strParsed.message;
  
}

form.addEventListener('input', throttle(onFormInput, 500))
form.addEventListener('submit', onFormSubmit);


function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
 
  console.log({
    email: form.email.value,
    message: form.message.value,
  });
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}

 










