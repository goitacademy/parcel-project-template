import { formKey } from '../feedback';
import _ from 'lodash';

const inputEvent = _.throttle(e => {
  let formStorage = JSON.parse(localStorage.getItem(formKey));
  if (!formStorage) {
    formStorage = { email: '', message: '' };
  }
  const element = e.target;
  const typedValue = element.value;
  formStorage[element.name] = typedValue;
  formStorage = JSON.stringify(formStorage);
  localStorage.setItem(formKey, formStorage);
}, 500);
export default inputEvent;
