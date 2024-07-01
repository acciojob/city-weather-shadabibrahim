// src/components/Weather.js
import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css';

const Weather = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const API_KEY = "65e6c064c2e37e1fc86b9fd9f7d9c701";

  const fetchWeather = async (e) => {
    if (e.key === 'Enter') {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=imperial`
      );
      setWeather(response.data);
      setQuery('');
    }
  };

  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Search city..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={fetchWeather}
      />
      {weather.main && (
        <div className="weather">
          <h2 className="city">{weather.name}, {weather.sys.country}</h2>
          <h3 className="temp">{Math.round(weather.main.temp)}°F</h3>
          <p className="description">{weather.weather[0].description}</p>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            alt={weather.weather[0].description}
          />
        </div>
      )}
    </div>
  );
};

export default Weather;