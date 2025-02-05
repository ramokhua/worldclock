function updateTime() {
  // new york
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElementElement.querySelector(".date");
    let newYorkTimeElement = newYorkElementElement.querySelector(".time");
    let newYorkTime = moment().tz("America/New_York");

    losAngelesDateElement.innerHTML = newYorkTime.format("MMMM	Do YYYY");
    losAngelesTimeElement.innerHTML = newYorkTime.format(
      "h:mm:ss [<small>]A[</small>]");
  }

    //sydney
    let sydneyElement = document.querySelector("#sydney");
    if(sydneyElement){
        let sydneyDateElement = sydneyElement.querySelector(".date");
        let sydneyTimeElement = sydneyElement.querySelector(".time");
        let sydneyTime = moment().tz("Australia/Sydney");

        sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
        sydneyTimeElement.innerHTML = sydneyTime.format("h:mm:ss [<small>]A[</small>]");
    }

    //gaborone
    let gaboroneElement = document.querySelector("#gaborone");
    if(gaboroneElement){
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
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city-select");
citiesSelectElement.addEventListener("change", updateCity);