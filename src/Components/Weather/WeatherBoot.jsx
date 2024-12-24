import React, { useState, useEffect } from "react";
import Search from "../Search/Search.jsx";

const WeatherBoot = ({ rainy, sunny, cloudy, haze, snow }) => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (city) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1e57c8dff4696cbcbc4c4848e02595b7&units=metric`
    );
    const data = await response.json();
    return data;
  };

  const handleSearch = (city) => {
    setLoading(true);
    fetchWeatherData(city).then((data) => {
      setWeatherData(data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchWeatherData("Lagos").then((data) => {
      setWeatherData(data);
      setLoading(false);
    });
  }, []);

  const getWeatherImage = (description) => {
    if (description.includes("sun")) return sunny;
    if (description.includes("rain")) return rainy;
    if (description.includes("cloud")) return cloudy;
    if (description.includes("haze")) return haze;
    if (description.includes("snow")) return snow;
  };

  return (
    <>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />

      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div className="spinner-border text-dark" role="status">
            <span className="sr-only">Loading</span>
          </div>
        </div>
      ) : (
        <div className="row d-flex justify-content-center py-5">
          <div className="col-md-8 col-lg-6 col-xl-5">
            <div
              className="card text-body shadow-lg"
              style={{ borderRadius: "35px" }}
            >
              <div className="card-body p-4">
                <div className="d-flex justify-content-between">
                  <h6 className="flex-grow-1">{weatherData.name}</h6>
                  <h6>{new Date().toLocaleTimeString()}</h6>
                </div>

                <div className="d-flex flex-column text-center mt-5 mb-4">
                  <img
                    src={getWeatherImage(weatherData.weather[0].description)}
                    alt="weather"
                    style={{ width: "100px" }}
                  />
                  <h6 className="display-4 mb-0 font-weight-bold">
                    {" "}
                    {weatherData.main.temp}°C{" "}
                  </h6>
                  <span className="small text-muted">
                    {weatherData.weather[0].description}
                  </span>
                </div>

                <div className="d-flex justify-content-between mt-4">
                  <div>
                    <h6 className="mb-0">Humidity</h6>
                    <span>{weatherData.main.humidity}%</span>
                  </div>
                  <div>
                    <h6 className="mb-0">Wind</h6>
                    <span>{weatherData.wind.speed} km/h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherBoot;
