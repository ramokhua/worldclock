function updateTime() {
  // New York
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkTime = moment().tz("America/New_York");

    newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
    newYorkTimeElement.innerHTML = newYorkTime.format("h:mm:ss [<small>]A[</small>]");
  }

  // Sydney
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");

    sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format("h:mm:ss [<small>]A[</small>]");
  }

  // Gaborone
  let gaboroneElement = document.querySelector("#gaborone");
  if (gaboroneElement) {
    let gaboroneDateElement = gaboroneElement.querySelector(".date");
    let gaboroneTimeElement = gaboroneElement.querySelector(".time");
    let gaboroneTime = moment().tz("Africa/Gaborone");

    gaboroneDateElement.innerHTML = gaboroneTime.format("MMMM Do YYYY");
    gaboroneTimeElement.innerHTML = gaboroneTime.format("h:mm:ss [<small>]A[</small>]");
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector(".cities");
  
  // Debug logs
  console.log("Selected city time zone:", cityTimeZone);
  console.log("Selected city name:", cityName);
  console.log("Current time in selected city:", cityTime.format("MMMM Do YYYY, h:mm:ss A"));
  
  // Hide all cities
  let allCities = document.querySelectorAll(".city");
  allCities.forEach(city => {
    city.style.display = 'none';
  });
  
  // Display only the selected city
  citiesElement.innerHTML = `
  <div class="city" style="display:block;">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
