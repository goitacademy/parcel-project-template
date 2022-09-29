import { signUp, quitAcc } from '../servise/firebase';
const signupButtonRef = document.querySelectorAll('.signup__btn');

signupButtonRef.forEach(button =>
  button.addEventListener('click', onButtonClick)
);

function onButtonClick(e) {
  const userPosition = e.currentTarget.dataset.authorithation;
  if (userPosition === 'disable') {
    signUp();
  } else {
    quitAcc();
  }
}

export function userIn(value) {
  signupButtonRef.forEach(button =>
    button.setAttribute('data-authorithation', value)
  );
}
