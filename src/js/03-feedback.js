import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
let selectedForm = {};

initForm();

feedbackForm.addEventListener('submit', evt => {
    evt.preventDefault();
    const formData = new FormData(feedbackForm);
    formData.forEach((value, name) => console.log(`${name}:`, value));
    localStorage.removeItem('feedback-form-state')
    selectedForm = {}
evt.target.reset();  
})

feedbackForm.addEventListener('input', throttle((evt) => { 
    selectedForm[evt.target.name] = evt.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(selectedForm))

}, 500)
)

function initForm() {
    let persistedFormInputs = localStorage.getItem('feedback-form-state');
    if(persistedFormInputs) {
        persistedFormInputs = JSON.parse(persistedFormInputs);
        Object.entries(persistedFormInputs).forEach(([name, value]) => {
            selectedForm[name] = value;
            feedbackForm.elements[name].value = value
        });
    }
}