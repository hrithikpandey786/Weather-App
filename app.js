const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&";
const apiKey = "b4035d31425642c351362ad6b74ce0ce";
const city = document.querySelector(".search input");
const btn = document.querySelector(".search img");
const img = document.querySelector(".mid-section img");
const tempText = document.querySelector("#temp");
const cityNameText = document.querySelector("#cityName"); 
const humidityText = document.querySelector("#humidityPercent");
const windText = document.querySelector("#windSpeed");
const card = document.querySelector(".weatherCard");
const error = document.querySelector(".error");


btn.addEventListener("click", ()=>{
    checkWeather();
});


async function checkWeather(){
    let response = await fetch(url+`q=${city.value.toLowerCase()}&appid=${apiKey}`);
    let data = await response.json();
    
    if(data.cod==404){
        card.style.display = "none";
        error.style.display = "block";
    } else {
        updateImage(data.weather[0].main.toLowerCase());
        updateCityName(data.name);
        updateTempText(data.main.temp);
        updateWindSpeed(data.wind.speed);
        updateHumidityText(data.main.humidity);
        card.style.display = "block";
        error.style.display = "none";
    }
    
}

function updateImage(weather){
    img.src = `images/${weather}.png`;
}

function updateCityName(city){
    cityNameText.innerText = city;
}

function updateTempText(temperature){
    tempText.innerText = Math.round(temperature)+"°C";
}

function updateWindSpeed(windSpeed){
    windText.innerText = windSpeed+" km/h";
}

function updateHumidityText(humidity){
    humidityText.innerText = Math.ceil(humidity)+"%";
}