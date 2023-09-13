const icon = document.getElementById("weather-icon");
const iconWrapper = document.getElementById("icon-wrapper");
const measure = document.getElementById("measure");
const search = document.getElementById("search");
const input = document.querySelector('input[type="text"]');
const city = document.querySelector("#city");

const apiKey = "c5c695b9f5a085e8c1f671f453534e43";

// console.log(navigator.geolocation);

async function getWeatherInfo(query) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}`;
  const response = await fetch(apiUrl);
  const data = await response.json();

  if (data.cod == 404) {
    console.log(data);
    measure.innerText = data.message;
  } else {
    const image = document.createElement("img");
    image.setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    );
    image.setAttribute("class", "mt-3");
    image.setAttribute("alt", "Icon");
    image.setAttribute("width", "80px");

    city.textContent = `${data.name}`;

    if (iconWrapper.contains(image)) {
      console.log("true");
    }

    iconWrapper.insertBefore(image, measure);
    measure.innerText = `${(data.main.temp - 273.15).toFixed(1)}°c`;
  }
}

search.addEventListener("click", () => {
  var query = input.value;
  getWeatherInfo(query);
});
