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
//change C-F
function tempFah() {
  let findTemp = document.querySelector("#meaningTemp");
  let findNumberOfF = document.getElementById("meaningTemp").textContent;
  let tempInF = Number.parseInt(findNumberOfF, 10);
  findTemp.innerHTML = (tempInF * 9) / 5 + 32;
}
let findFah = document.querySelector(".fah");
findFah.addEventListener("click", tempFah);
