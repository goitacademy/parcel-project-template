import { formKey } from '../feedback';

const inputEvent = e => {
  let formStorage = JSON.parse(localStorage.getItem(formKey));
  if (!formStorage) {
    formStorage = { email: '', message: '' };
  }
  const element = e.target;
  const typedValue = element.value;
  formStorage[element.name] = typedValue;
  formStorage = JSON.stringify(formStorage);
  localStorage.setItem(formKey, formStorage);
};
export default inputEvent;
