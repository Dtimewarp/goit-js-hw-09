import throttle from 'lodash.throttle';

const inputForm = document.querySelector('.feedback-form');
const FEEDBACK_STATE_KEY = 'feedback-form-state';

// Відстеження події input на формі
inputForm.addEventListener('input', throttle(handleInput, 500));

// Заповнення полів форми при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
  const savedState = JSON.parse(localStorage.getItem(FEEDBACK_STATE_KEY));

  if (savedState) {
    inputForm.elements.email.value = savedState.email || '';
    inputForm.elements.message.value = savedState.message || '';
  }
});

// Сабміт форми
inputForm.addEventListener('submit', handleSubmit);

// Обробник події input
function handleInput() {
  const formData = {
    email: inputForm.elements.email.value,
    message: inputForm.elements.message.value,
  };

  // Зберігання стану форми в локальному сховищі
  localStorage.setItem(FEEDBACK_STATE_KEY, JSON.stringify(formData));
}

// Обробник сабміту форми
function handleSubmit(event) {
  event.preventDefault();

  // Отримання та виведення у консоль об'єкта з полями email та message та їх поточними значеннями
  const formData = {
    email: inputForm.elements.email.value,
    message: inputForm.elements.message.value,
  };

  console.log(formData);

  // Очищення сховища та полів форми
  localStorage.removeItem(FEEDBACK_STATE_KEY);
  inputForm.reset();
}