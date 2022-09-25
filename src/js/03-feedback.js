import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const STORAGE_KEY= 'feedback-form-state';

let formData = {};

onInputForm();
formRef.addEventListener('input', throttle(onInput, 500));
formRef.addEventListener('submit', onFormSubmit);

function onInputForm(evt) {
    const input = localStorage.getItem(STORAGE_KEY);
    const newFormData = JSON.parse(input);
    if (newFormData) {
        Object.entries(newFormData).forEach(([name, value]) => {
            formRef.elements[name].value = value;
            formData[name] = value;
        });
    }
}

function onInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
    evt.preventDefault();
    if (formData.email === "" || formData.message === "") {
        alert("Всі поля повинні бути заповнені");
        return;
    };
    
    console.log('This is Form Data:', formData);
    evt.target.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = {};
}