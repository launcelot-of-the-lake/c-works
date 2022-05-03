const callbackForms = document.querySelectorAll('.callback-form');

function disabledFormElements(elements) {
  [...elements].forEach((element) => element.disabled = true);
}

function changeButtonText(button, text) {
  if (!button) return;
  button.classList.add('callback-form__submit_submitted');
  button.textContent = text;
}

function submitCallbackForm(evt) {
  evt.preventDefault();

  const form = evt.currentTarget;
  const button = form.querySelector('.callback-form__submit');
  disabledFormElements(form.elements);
  changeButtonText(button, 'Круто, спасибо за доверие!');
}

callbackForms.forEach((callbackForm) => {
  callbackForm.addEventListener('submit', submitCallbackForm);
});
