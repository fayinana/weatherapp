`use strict`;
const citySearch = document.getElementById("city-name");
const cityNameDom = document.querySelector(".name");
const humDom = document.querySelector(".hum");
const tempDom = document.querySelector(".temp");
const windSDom = document.querySelector(".wind-s");
const windDDom = document.querySelector(".wind-d");
const preDom = document.querySelector(".pre");
const tMaxDom = document.querySelector(".t-max");
const tMinDom = document.querySelector(".t-min");
const iconDom = document.querySelector(".icon");
const disDom = document.querySelector(".dis");
const apiKey = "bcf49d8b4a6bb9b1d9f2fd04d1421c5d";
// const city = citySearch.value;
const city = "london";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

const getData = async function () {
  request = await fetch(apiUrl);
  data = await request.json();

  return data;
};

getData()
  .then((data) => {
    const name = data.name;
    cityNameDom.innerHTML = name;
    const hum = data.main.humidity;
    humDom.innerHTML = hum;
    const temp = data.main.temp;
    tempDom.innerHTML = temp;
    const t_max = data.main.temp_max;
    tMaxDom.innerHTML = t_max;
    const t_min = data.main.temp_min;
    tMinDom.innerHTML = t_min;
    const wind_D = data.wind.deg;
    windDDom.innerHTML = wind_D;
    const wind_S = data.wind.speed;
    windSDom.innerHTML = wind_S;
    const pre = data.main.pressure;
    preDom.innerHTML = pre;
    const dis = data.weather[0].description;
    disDom.innerHTML = dis;
    const icon = data.weather[0].icon;
    iconDom.innerHTML = String.fromCodePoint(parseInt(icon, 16));
  })
  .catch((error) => console.log(error));

// const getData2 = function () {
//   fetch(apiKey)
//     .then((response) => {
//       let data = response.json();
//       return data;
//     })
//     .then((data) => {
//       let lat = data[0].let;
//       let lon = data[0].lon;

//       return fetch(apiKeyTwo);
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

// getData2();
// fetch(apiUrl)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => console.log(data));
