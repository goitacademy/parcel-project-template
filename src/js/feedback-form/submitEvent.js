import { formKey } from '../feedback.js';
import refreshForm from './refreshForm.js';

const submitEvent = e => {
  e.preventDefault();
  let formStorage = localStorage.getItem(formKey);
  formStorage = JSON.parse(formStorage);
  console.log(formStorage);
  formStorage = { email: '', message: '' };
  formStorage = JSON.stringify(formStorage);
  localStorage.setItem(formKey, formStorage);
  refreshForm();
};

export default submitEvent;
