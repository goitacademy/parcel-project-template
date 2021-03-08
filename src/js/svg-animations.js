new Vivus(
  'adv-svg',
  {
    type: 'sync',
    duration: 175,
    animTimingFunction: Vivus.EASE,
  },
  myVivus => {
    if (myVivus.getStatus() === 'end') {
      myVivus.reset().play();
    }
  },
);

new Vivus(
  'adv-svg2',
  {
    type: 'sync',
    duration: 175,
    animTimingFunction: Vivus.EASE,
  },
  myVivus => {
    if (myVivus.getStatus() === 'end') {
      myVivus.reset().play();
    }
  },
);
new Vivus(
  'adv-svg3',
  {
    type: 'sync',
    duration: 175,
    animTimingFunction: Vivus.EASE,
  },
  myVivus => {
    if (myVivus.getStatus() === 'end') {
      myVivus.reset().play();
    }
  },
);
