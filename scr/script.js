//change city name
function changeCity(event) {
  event.preventDefault();
  let findCity = document.querySelector(".search");

  let findCityName = document.querySelector(".city");
  findCityName.innerHTML = findCity.value;
}
let findForm = document.querySelector("form");
findForm.addEventListener("submit", changeCity);
//change date
let now = new Date();
let hour = now.getHours();
let minute = now.getMinutes();
let date = now.getDate();
let year = now.getFullYear();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let monthsName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let months = monthsName[now.getMonth()];

let findData = document.querySelector(".data");
findData.innerHTML = date + " " + months + " " + year;
let findWeekDay = document.querySelector(".weekDay");
if (minute < 10) {
  findWeekDay.innerHTML = day + ` (${hour}:0${minute})`;
} else {
  findWeekDay.innerHTML = day + ` (${hour}:${minute})`;
}
//defoult temp

let apiKey = "8d345000a90a385c939bc9cbb67b4e7e";
let city = "Kyiv";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayWeather);
// 5 week choose city
function chooseCity(event) {
  event.preventDefault();
  let inputCity = document.querySelector(".search");
  let apiKey = "8d345000a90a385c939bc9cbb67b4e7e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&APPID=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

findForm.addEventListener("submit", chooseCity);

// 5 week location
function displayWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  let infoWeather = document.querySelector("h1");
  infoWeather.innerHTML = response.data.name;
  document.querySelector("#meaningTemp").innerHTML = temperature;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
}
function showLocation(position) {
  let apiKey = "8d345000a90a385c939bc9cbb67b4e7e";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showLocation);
}
let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);
