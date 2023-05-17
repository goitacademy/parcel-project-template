// imports
import getElement from './getElement.js';
import inputEvent from './feedback-form/input-event.js';
import refreshForm from './feedback-form/refreshForm.js';
import submitEvent from './feedback-form/submitEvent.js';

// exports
export const formKey = 'feedback-form-state';
export const feedbackForm = getElement('.feedback-form');

// events
feedbackForm.addEventListener('input', inputEvent);
window.addEventListener('DOMContentLoaded', refreshForm);
feedbackForm.addEventListener('submit', submitEvent);
