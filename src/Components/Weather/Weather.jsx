import React, { useEffect, useState } from "react";
import Search from "../Search/Search.jsx";
import "../Weather-app.css";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (city) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1e57c8dff4696cbcbc4c4848e02595b7`
      );
      const data = await response.json();

      if (data) {
        setLoading(false);
        setWeatherData(data);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleSearch = async () => {
    fetchWeatherData(search);
  };

  const getCurrentDate = () => {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  useEffect(() => {
    fetchWeatherData("Lagos");
  }, []);

  return (
    <>
      <div className="App">
        <Search
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />

        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div>
            {/* City Name */}
            <div className="city-name">
              <h2>
                {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
              </h2>
            </div>

            {/* Current Date */}
            <div className="date">
              <span>{getCurrentDate()}</span>
            </div>

            {/* Weather Temperature */}
            <div className="temp">{weatherData?.main.temp}</div>

            {/* Weather Description */}
            <p className="description">
              {weatherData && weatherData.weather && weatherData.weather[0]
                ? weatherData.weather[0].description
                : ""}
            </p>

            {/* Weather Information */}
            <div className="weather-info">
              <div>
                <div>
                  <p>{weatherData?.wind?.speed}</p>
                  <p>Wind Speed</p>
                </div>
              </div>
              <div>
                <div>
                  <p>{weatherData?.main?.humidity}%</p>
                  <p>Humidity</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Weather;
