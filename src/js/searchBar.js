//Slider
const cityContainer = document.querySelector('.slider');

const createCityElement = (id, name) => {
  let cityDiv = document.createElement('div');
  cityDiv.className = 'slide';
  cityDiv.dataset.id = id;
  const cityName = document.createElement('h2');
  cityName.className = 'city-name';
  const cityCloseBtn = document.createElement('button');
  cityCloseBtn.className = 'city-close-btn';
  cityCloseBtn.innerText = 'x';
  cityName.innerText = name;
  cityDiv.append(cityName, cityCloseBtn);
  cityContainer.appendChild(cityDiv);
};

export { createCityElement };
