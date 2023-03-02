import throttle from 'lodash.throttle';

const submitBtn = document.getElementsByName(submitBtn);
submitBtn.addEventListener("click", () =>{
const email = document.querySelector("input").value;
localStorage.setItem("feedback-form-state", email)
const message = document.querySelector("input").value;
localStorage.setItem("feedback-form-state", message)
});
const savedEmail = localStorage.getItem("feedback-form-state")
 localStorage.getItem("feedback-form-state")