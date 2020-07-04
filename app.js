window.addEventListener('load', () => {
  let long;
  let lat;
  let temperatureDescription = document.querySelector(
    '.temperature-decription'
  );
  let temperatureDegree = document.querySelector('.temperature-degree');
  let locationTimezone = document.querySelector('.location-timezone');
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=3cca572cca535cbcf09c7b64987dc57f`;

      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          //console.log(data);
          const { temp } = data.main;
          const { description } = data.weather[0];
          //set DOM elements from the API
          temperatureDegree.textContent = temp;
          temperatureDescription.textContent = description;
          locationTimezone.textContent = data.name;
        });
    });
  } else {
    h1.textContent = 'hey your browser doesnot support geolocation';
  }

  function setIcons(icon,iconID){
      const skycons = new skycons({color:"white"};)
      const currentIcon = 
  }
});
