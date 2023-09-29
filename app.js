/*

Include the JavaScript file provided in your project, 
when loading your project, ask the user "Enter a city" (example: Paris), 
alert "It is currently 19°C (66°F) in Paris with a humidity of 80%"

If the city doesn't exist in the object (i.e: Sydney), 
alert "Sorry, we don't know the weather for this city, 
try going to https://www.google.com/search?q=weather+sydney". Since this is an alert, the link shouldn't be clickable*/

let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  sanfrancisco: {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};
/*let cityName = weather.city;
if (weather.city !== undefined) {
  let temperature = weather[city].temp;
  let humidity = weather[city].humidity;
  alert(
    `It is currently ${temperature} in ${city} with a humidity ${humidity}`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}*/

/*function wEather(cityName) {
  let cityData = weather[cityName.toLowerCase()];
  if (cityData) {
    let temperatureCelsius = cityData.temp;
    let temperatureFahrenheit = temperatureCelsius;
    let humidity = cityData.humidity;
    alert(
      `It is currently ${temperatureCelsius.toFixed(
        1
      )}°C (${temperatureFahrenheit.toFixed(
        1
      )}°F) in ${cityName} with a humidity of ${humidity}%.`
    );
  } else {
    alert(
      `Sorry, we don't know the weather for this city. Try going to https://www.google.com/search?q=weather+${cityName}`
    );
  }
}
let userInput = prompt("Enter a city :");
if (userInput) {
  let cityName = userInput.trim();
  wEather(cityName);
}*/
//task 1
// Function to format the current date and time as "Tuesday 16:00"
function formatCurrentDateTime() {
  let daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDate = new Date();
  let dayOfWeek = daysOfWeek[currentDate.getDay()];
  let hours = String(currentDate.getHours()).padStart(2, "0");
  let minutes = String(currentDate.getMinutes()).padStart(2, "0");

  let formattedDateTime = `${dayOfWeek} ${hours}:${minutes}`;

  return formattedDateTime;
}

// Display the formatted date and time in the HTML element
let dateTimeElement = document.querySelector("#dateTime");
dateTimeElement.textContent = formatCurrentDateTime();

//task 2
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the user input (city name)
  let cityInput = document.querySelector("#cityInput");
  let cityName = cityInput.value;

  // Display the city name on the page
  let resultDiv = document.querySelector(".result");
  resultDiv.textContent = ` ${cityName}`;

  // Get the form element and add a submit event listener

  // I AM WORKING ON BONUS FEATURE !!!
  //let cityInput = document.querySelector("#cityInput");
  //let cityName = "Kyiv";
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric`;

  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperarure);
}
let searchForm = document.querySelector(".search");
searchForm.addEventListener("submit", handleFormSubmit);
function showTemperarure(response) {
  console.log(response);
  //let temperature = Math.round(response.data.main.temp);
  let tempElem = document.querySelector("#temperature");
  tempElem.innerHTML = `${response.data.main.temp}℃`;
}
