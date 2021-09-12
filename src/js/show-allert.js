import { alert } from '@pnotify/core/dist/PNotify';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export default showAllert;

function showAllert(error) {
  alert({
    text: error,
    type: 'error',
    delay: 2500,
  });
}
