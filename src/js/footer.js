import getModalRefs from './modal_refs';
import refs from './refs';

const { teamModal, body } = refs;
const { onOpenModal } = getModalRefs(body);

teamModal.addEventListener('click', onOpenModal);
