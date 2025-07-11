import "./App.css";
import SearchBar from "./components/SearchBar";
import FilterButtons from "./components/FilterButtons";
import WeatherDescription from "./components/WeatherDescription";
import ForecastButtons from "./components/ForecastButtons";
import Forecast from "./components/Forecast";
import DisplayWeather from "./components/DisplayWeather";
import { useState, useEffect } from "react";

export default function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Surabaya");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("Pressure");
  const [degree, setDegree] = useState("°C");
  const [forecast, setForecast] = useState("Hourly");

  const API_KEY = "0a4070f3a251fe99ec815f895a2ad95a";
  useEffect(() => {
    if (!city) return;
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

        const [forecastRes, weatherRes] = await Promise.all([fetch(forecastUrl), fetch(weatherUrl)]);

        if (!forecastRes.ok || !weatherRes.ok) {
          throw new Error("City not found or Something Wrong.");
        }
        const forecastData = await forecastRes.json();
        const weatherData = await weatherRes.json();
        setWeather({
          current: weatherData,
          forecast: forecastData.list,
          infoCity: forecastData.city,
        });
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [city]);

  if (loading) {
    return <div className="status-message">Loading...</div>;
  }
  if (error) {
    return <div className="status-message">Error: {error}</div>;
  }

  return (
    <>
      <SearchBar onSearch={setCity} />

      <div className="data-weather">
        <DisplayWeather
          dt={weather.forecast[0].dt}
          city={weather.infoCity.name}
          country={weather.infoCity.country}
          temperature={weather.current.main.temp}
          icon={weather.current.weather[0].icon}
          description={weather.current.weather[0].description}
          pressure={weather.current.main.pressure}
          humidity={weather.current.main.humidity}
          windspeed={weather.current.wind.speed}
          visibility={weather.current.visibility}
          activeDegree={degree}
          onChangeDegree={setDegree}
        />

        <FilterButtons activeFilter={filter} onChangeFilter={setFilter} />

        <WeatherDescription
          activeFilter={filter}
          pressure={weather.current.main.pressure}
          humidity={weather.current.main.humidity}
          windspeed={weather.current.wind.speed}
          visibility={weather.current.visibility}
        />

        <ForecastButtons activeForecast={forecast} onChangeForecast={setForecast} />

        <Forecast activeForecast={forecast} forecastDataList={weather.forecast} />

        <footer>
          <p>
            Data from <a href="http://openweathermap.org">openweathermap</a>
          </p>
        </footer>
      </div>
    </>
  );
}
