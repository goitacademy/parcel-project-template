import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form')
const emailEl = document.querySelector('label [name="email"]')
const messageEl = document.querySelector('label [name="message"]')
const STORAGE_KEY = 'feedback-form-state';
form.addEventListener('input',throttle(modificareInput, 500));
function modificareInput(){
    const email = emailEl.value;
    const message = messageEl.value
    console.log(email)
    console.log(message)

    const formData = {email, message};
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}
remindData();
function remindData(){
const saveData = JSON.parse(localStorage.getItem(STORAGE_KEY));
if(saveData){
    emailEl.value = saveData.email;
    messageEl.value = saveData.message;
}
};
form.addEventListener('submit', event => {
    event.preventDefault();
    const email = emailEl.value;
    const message = messageEl.value;

    console.log( `Email: ${email} / Mesaj: ${message}`)
    form.reset()
    localStorage.removeItem(STORAGE_KEY)})