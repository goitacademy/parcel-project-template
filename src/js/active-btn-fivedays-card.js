const daysList = document.querySelector('.days-list');
const daysListItem = document.querySelectorAll('.days-list__item');

daysList.addEventListener('click', handleBtnClick);

const activeCardFiveDay = event => {
  const daysListItem = document.querySelectorAll('.days-list__item');

  daysListItem.forEach(e => {
    const day = e.childNodes[0];
    const moreInfoBtn = e.childNodes[4];

    day.classList.remove('days-list__day-of-the-week--active');
    moreInfoBtn.classList.remove('days-list__more-btn__active');
  });

  const target = event.target;

  const listItem = target.closest('.days-list__item');

  if (listItem) {
    const day = listItem.querySelector('.days-list__day-of-the-week');
    const moreInfoBtn = listItem.querySelector('.days-list__more-btn');
    day.classList.add('days-list__day-of-the-week--active');
    moreInfoBtn.classList.add('days-list__more-btn__active');
  }
};

function handleBtnClick(event) {
  event.preventDefault();
  const target = event.target;
  if (target.nodeName == 'BUTTON') {
    activeCardFiveDay(event);
  }
}

// In summary, this module manages the visual state of a list of days and their associated buttons.
//  When a button is clicked, it activates the corresponding day element and button, while deactivating others.
//  The active state is controlled by adding and removing CSS classes.
