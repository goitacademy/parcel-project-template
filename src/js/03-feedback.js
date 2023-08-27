import throttle from 'lodash.throttle';

const refs = {
  formEl: document.querySelector('.feedback-form'),
};

const FORM_VALUE_KEY = 'feedback-form-state';

refs.formEl.addEventListener('submit', onSubmitForm);
refs.formEl.addEventListener('input', throttle(onFormValue, 500));

let feedbackForm = {};
function onFormValue(e) {
  feedbackForm[e.target.name] = e.target.value.trim();

  localStorage.setItem(FORM_VALUE_KEY, JSON.stringify(feedbackForm));
}

const onLoad = () => {
  try {
    const data = localStorage.getItem(FORM_VALUE_KEY);

    if (!data) return;
    feedbackForm = JSON.parse(data);

    Object.entries(feedbackForm).forEach(([key, val]) => {
      refs.formEl.elements[key].value = val;
    });
  } catch (error) {
    console.log(error.message);
  }
};
onLoad();

function onSubmitForm(evt) {
  evt.preventDefault();

  evt.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(FORM_VALUE_KEY)));
  localStorage.removeItem(FORM_VALUE_KEY);
}
