require('dotenv').config();
const apiKey = process.env.API_KEY;
const fetch = require('node-fetch')

const WeatherController = {
  GetWeather: async (req, res) => {
    const city = req.params.city;
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      if (response.status === 404) {
        res.status(400).json({ error: "City not Found" });
        return;
      }

    

      const weatherData = await response.json();
      if (weatherData.message === "city not found") {
        res.status(400).json({ error: "City not Found" });
        return;
      }
      res.status(200).json({
        name: weatherData.name,
        main: weatherData.weather[0].main,
        description: weatherData.weather[0].description,
        temp: weatherData.main.temp,
        feels_like: weatherData.main.feels_like,
        wind: weatherData.wind.speed,
        humidity: weatherData.main.humidity,
        icon: weatherData.weather[0].icon,
      });
        
    } catch (err) {
      console.log('Error fetching weather data', err);
      throw err;
    }
  }

};

module.exports = WeatherController;

