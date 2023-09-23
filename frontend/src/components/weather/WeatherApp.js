import './WeatherApp.css'
import { API_BASE_URL } from '../../config';
import React, { useEffect, useState } from 'react';

import WeatherLogo from '../weatherLogo/WeatherLogo';
import SearchComponent from '../search/SearchComponent';
import WeatherMainDetails from "../weatherMainDetails/WeatherMainDetails";
import WeatherSecondaryDetails from "../weatherSecondaryDetails/WeatherSecondaryDetails";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState();
  const [city, setCity] = useState("London");

  const handleCityChange = (newCity) => {
    setCity(newCity);
  };

  const getData = () => {
    try {
      fetch(`${API_BASE_URL}/weather/${city}`)
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    } catch (error) {
      console.error('Error retrieving weather data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, [city]);

  return (
    <div className="container">
      <h1 className="weatherTitle">Weather Now</h1>
      
      <div className="SearchBarCompContainer">
        <SearchComponent className="searchComponent" onCityChange={handleCityChange} />
      </div>

      <div className="weatherIconCompContainer">
        <WeatherLogo className="weatherIconComponent" icon={weatherData && weatherData.icon}></WeatherLogo>
      </div>

      <div className="weatherMainDetailsCompContainer">
        <WeatherMainDetails
          name={weatherData && weatherData.name}
          feels_like={weatherData && weatherData.feels_like}
          temp={weatherData && weatherData.temp}
        />
      </div>

      <div className="weatherSecondaryDetailsCompContainer">
        <WeatherSecondaryDetails 
          wind={weatherData && weatherData.wind}
          humidity={weatherData && weatherData.humidity}
        />
      </div>
    </div>
  );
};

export default WeatherApp;
