const city_name = "Sao Paulo";
const num_days = 5;
const api_key = "2f09b416d347c9f524fa92b71f8b0960";
const cnt = 5;
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city_name}&units=metric&cnt=${cnt}&APPID=${api_key}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < num_days; i++) {
            const date = new Date(data.list[i].dt * 1000);
            const tempMin = data.list[i].temp_min;
            const tempMax = data.list[i].temp_max;
            const weather_desc = data.list[i].weather[0].description;
            console.log(`Day ${i+1}: ${weather_desc}, Min temp: ${tempMin}°C, Max temp: ${tempMax}°C`);
        }
    });
