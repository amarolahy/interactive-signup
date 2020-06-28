import '../sass/index.scss';

console.log('It works');

const nameInput: HTMLInputElement = document.querySelector('#name');
const emailInput: HTMLInputElement = document.querySelector('#email');
const passwordInput: HTMLInputElement = document.querySelector('#password');
const signUpArea: HTMLDivElement = document.querySelector('.signup');
const userPasswordArea: HTMLDivElement = document.querySelector('.user-password');
const validateSignupArea: HTMLDivElement = document.querySelector('.validate-signup');

const notEmpty = (element: HTMLInputElement) => element.value.trim() !== '';
const validEmail = (element: HTMLInputElement) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(element.value);
const isHidden = (element: HTMLElement) => element.classList.contains('hidden');

const onValidNameAndEmail = () => {
  if (isHidden(userPasswordArea) && notEmpty(nameInput) && notEmpty(emailInput) && validEmail(emailInput)) {
    userPasswordArea.classList.remove('hidden');
    signUpArea.scrollTo(0, signUpArea.scrollHeight);
    setTimeout(() => passwordInput.focus(), 0);
  } 
}

const onValidPassword = () => {
  if (isHidden(validateSignupArea) && notEmpty(passwordInput)) {
    validateSignupArea.classList.remove('hidden');
    signUpArea.scrollTo(0, signUpArea.scrollHeight);
  }
}

nameInput.addEventListener('focusout', onValidNameAndEmail);
emailInput.addEventListener('focusout', onValidNameAndEmail);
passwordInput.addEventListener('focusout', onValidPassword);

document.addEventListener('keydown', (ev) => {
  if (13 === ev.keyCode) {
    onValidNameAndEmail();
    onValidPassword();
  }
})