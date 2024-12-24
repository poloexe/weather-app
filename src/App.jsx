import Weather from "./Components/Weather/Weather";
import WeatherBoot from "./Components/Weather/WeatherBoot.jsx";
import Rainy from "./assets/rainy.png";
import Sunny from "./assets/sunny.png";
import Cloudy from "./assets/cloudy.png";
import Haze from "./assets/haze.png";
import Snow from "./assets/snow.png";

function App() {
  return (
    <>
      {/* <Weather /> */}
      <WeatherBoot rainy={Rainy} sunny={Sunny} cloudy={Cloudy} haze={Haze} snow={Snow} />
    </>
  );
}

export default App;
