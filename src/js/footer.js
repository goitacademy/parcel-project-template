import getModalRefs from "./modal_refs";
import refs from "./refs";

const {teamModal, btnCloseModal, developers} = refs;
const {onOpenModal, onCloseModalClick} = getModalRefs(developers);

teamModal.addEventListener('click', onOpenModal);
btnCloseModal.addEventListener('click', onCloseModalClick);

