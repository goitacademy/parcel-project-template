import { formKey } from '../feedback';

const refreshForm = () => {
  let formStorage = JSON.parse(localStorage.getItem(formKey));
  if (formStorage) {
    for (let key in formStorage) {
      let inputSelected = document.getElementsByName(`${key}`);
      inputSelected = inputSelected[0];
      inputSelected.value = formStorage[key];
    }
  }
};

export default refreshForm;
