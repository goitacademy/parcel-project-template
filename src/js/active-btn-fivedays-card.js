const daysList = document.querySelector('.days-list');
const daysListItem = document.querySelectorAll('.days-list__item');

daysList.addEventListener('click', handleBtnClick);

const activeCardFiveDay = event => {
  const daysListItem = document.querySelectorAll('.days-list__item');
  console.log('daysListItem:', daysListItem); // Logging days list items

  daysListItem.forEach(e => {
    const day = e.childNodes[0];
    const moreInfoBtn = e.childNodes[4];
    console.log('Day element:', day); // Logging day element
    console.log('More Info Button:', moreInfoBtn); // Logging more info button

    day.classList.remove('days-list__day-of-the-week--active');
    moreInfoBtn.classList.remove('days-list__more-btn__active');
  });

  const target = event.target;
  console.log('Clicked target:', target); // Logging clicked target

  const listItem = target.closest('.days-list__item');
  console.log('Closest list item:', listItem); // Logging closest list item

  if (listItem) {
    const day = listItem.querySelector('.days-list__day-of-the-week');
    const moreInfoBtn = listItem.querySelector('.days-list__more-btn');

    console.log('Active Day element:', day); // Logging active day element
    console.log('Active More Info Button:', moreInfoBtn); // Logging active more info button

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
