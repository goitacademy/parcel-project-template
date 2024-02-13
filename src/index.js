let translate = 0;

const onNext = () => {
  const items = document.querySelectorAll('[data-carousel-item]');
  if (translate < items.length - 1) {
    translate = translate + 1;

    percentage = -100 * translate;
    items.forEach(item => {
      item.style.transform = `translateY(${percentage}%)`;
    });
  }
};

const onBack = () => {
  const items = document.querySelectorAll('[data-carousel-item]');
  if (translate > 0) {
    translate = translate - 1;

    percentage = -100 * translate;
    items.forEach(item => {
      item.style.transform = `translateY(${percentage}%)`;
    });
  }
};
