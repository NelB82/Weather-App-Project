//Suche in h1 unwandeln

function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#exampleInputSearch");
  let todayElement = document.querySelector("#city-today");
  todayElement.innerHTML = city.value;
  let apiKey = "07215d6236a13b60ae899743a0628f49";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showCity);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);

//api City zu Temperatur

function showCity(response) {
  document.querySelector("#tempCelFar").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#rain").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}

//Geolocation

function showPositionCity(response) {
  document.querySelector("#tempCelFar").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("#rain").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}

function getPosition(position) {
  let apiKey = "07215d6236a13b60ae899743a0628f49";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrlCoords = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrlCoords).then(showPositionCity);
}

function startNavigator() {
  navigator.geolocation.getCurrentPosition(getPosition);
}

let searchButton = document.querySelector("#currentLocation");
searchButton.addEventListener("click", startNavigator);

//Datum

let now = new Date();
let today = document.querySelector("#today");

let weekDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let currentDay = weekDay[now.getDay()];
today.innerHTML = currentDay;

let dateNow = new Date();
let dateToday = document.querySelector("#date-today");
let currentDate = dateNow.getDate();

let Month = [
  "01",
  "01",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];
let currentMonth = Month[dateNow.getMonth()];
let currentYear = dateNow.getFullYear();
dateToday.innerHTML = `${currentDate}.${currentMonth}.${currentYear}`;

//Zeit
let timeNow = new Date();
let timeToday = document.querySelector(`#time-today`);
let currentHour = timeNow.getHours();
if (currentHour < 10) {
  currentHour = `0${currentHour}`;
}
let currentMinute = timeNow.getMinutes();
if (currentMinute < 10) {
  currentMinute = `0${currentMinute}`;
}
timeToday.innerHTML = `${currentHour}:${currentMinute}`;

//Today;
//function convertToFahrenheit(event) {
//event.preventDefault();
//let temperatureElement = document.querySelector("#tempCelFar");
//let tempCelFar = temperatureElement.innerHTML;
//tempCelFar = Number(tempCelFar);
//temperatureElement.innerHTML = Math.round((tempCelFar * 9) / 5 + 32);
//}

//function convertToCelsius(event) {
//event.preventDefault();
//let tempCelFar = temperatureElement.innerHTML;
//tempCelFar = Number(tempCelFar);
//temperatureElement.innerHTML = Math.round(
//((temperatureElement - 32) * 5) / 9
//);
//}
//let FahrenheitToday = document.querySelector("#fahrenheit-today");
//FahrenheitToday.addEventListener("click", convertToFahrenheit);

//let celsiusToday = document.querySelector("#celsius-today");
//let temperatureElement = document.querySelector("temperatureElement");
//celsiusToday = addEventListener("click", convertToCelsius);

//Tomorrow
//let tempTomorrow = document.getElementById("tomCelFar").innerText;

//function tempToFahrenheitTom() {
//let tempTomorrowFar = Math.round((tempTomorrow * 9) / 5 + 32);
//document.getElementById("tomCelFar").innerText = tempTomorrowFar;
//}

//function tempToCelsiusTom() {
//let tempTomorrowFar = Math.round((tempTomorrow * 9) / 5 + 32);
//let tempTomorrowCel = Math.round(((tempTomorrowFar - 32) * 5) / 9);
//document.getElementById("tomCelFar").innerText = tempTomorrowCel;
//}
