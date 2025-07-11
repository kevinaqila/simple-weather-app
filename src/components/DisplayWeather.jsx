export default function DisplayWeather({
  dt,
  city,
  country,
  temperature,
  icon,
  description,
  pressure,
  humidity,
  windspeed,
  visibility,
  activeDegree,
  onChangeDegree,
}) {
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  let changeTemperature;
  if (activeDegree === "°F") {
    changeTemperature = Math.round((temperature * 9) / 5 + 32);
  } else if (activeDegree === "°C") {
    changeTemperature = Math.round(temperature);
  }

  const date = new Date(dt * 1000);

  const dateOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  const formattedDate = date.toLocaleDateString("en-US", dateOptions);

  return (
    <div className="top">
      <div className="left">
        <div className="data-location">
          <h2>
            {city}, {country}
          </h2>
          <h4>{formattedDate}</h4>
        </div>
        <div className="temperature">
          <img src={iconUrl} alt="" className="temp-icon" />
          <div>
            <p>{changeTemperature}</p>
            <span>{description}</span>
          </div>
          <div className="temp-option">
            <button
              type="button"
              className={activeDegree === "°C" ? "active" : ""}
              onClick={() => onChangeDegree("°C")}
            >
              <span className="visually-hidden">Degrees</span>
              °C<span className="visually-hidden">Temperature</span>
            </button>
            <button
              type="button"
              className={activeDegree === "°F" ? "active" : ""}
              onClick={() => onChangeDegree("°F")}
            >
              <span className="visually-hidden">Degrees</span>
              °F<span className="visually-hidden">Temperature</span>
            </button>
          </div>
        </div>
      </div>
      <div className="details">
        <p>Pressure: {pressure}mb</p>
        <p>Humidity: {humidity}%</p>
        <p>Wind Speed: {windspeed}km/h</p>
        <p>Visibility: {visibility / 1000}km</p>
      </div>
    </div>
  );
}
