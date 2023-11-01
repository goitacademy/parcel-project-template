function displayCurrentTime() {
  const currentDate = new Date();
  const dayDisplay = document.getElementById('dayDisplay');
  const monthDisplay = document.getElementById('monthDisplay');
  const timeDisplay = document.getElementById('timeDisplay');
  const sunriseDisplay = document.getElementById('sunriseDisplay');
  const sunsetDisplay = document.getElementById('sunsetDisplay');

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const month = months[currentDate.getMonth()];
  const day = currentDate.getDate();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  const ordinalIndicator = getOrdinalIndicator(day);
  function getOrdinalIndicator(day) {
    if (day >= 11 && day <= 13) {
      return 'th';
    }
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }
  dayDisplay.textContent = `${day}${ordinalIndicator} ${dayOfWeek}`;
  monthDisplay.textContent = `${month}`;
  timeDisplay.textContent = formattedTime;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      const apiKey = '384cfe62d8b3ed2e8a555db347025eef';

      // Fetch sunrise and sunset times
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
      )
        .then(response => response.json())
        .then(data => {
          const DayContent = `
          <h3>${day}<sup class="exponent">${getOrdinalIndicator(
            day
          )}</sup> ${dayOfWeek}</h3>
        `;
          dayDisplay.innerHTML = DayContent;
          const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString(
            [],
            { hour: '2-digit', minute: '2-digit', hour12: false }
          );
          const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString(
            [],
            { hour: '2-digit', minute: '2-digit', hour12: false }
          );

          sunriseDisplay.textContent = `${sunrise}`;
          sunsetDisplay.textContent = `${sunset}`;
        })
        .catch(error =>
          console.error('Error fetching data from OpenWeatherMap:', error)
        );
    });
  }
}
displayCurrentTime();
