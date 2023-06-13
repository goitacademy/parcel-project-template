const newElement = selection => {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw Error(`the ${selection} is not a valid selection`);
  }
};

export default newElement;
