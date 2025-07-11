export default function ForecastButtons({ activeForecast, onChangeForecast }) {
  return (
    <div className="forecast-button">
      <button
        type="button"
        className={activeForecast === "Hourly" ? "active" : ""}
        onClick={() => onChangeForecast("Hourly")}
      >
        <span className="visually-hidden">Show</span>
        Hourly<span className="visually-hidden">Weather</span>
      </button>
      <button
        type="button"
        className={activeForecast === "Daily" ? "active" : ""}
        onClick={() => onChangeForecast("Daily")}
      >
        <span className="visually-hidden">Show</span>
        Daily<span className="visually-hidden">Weather</span>
      </button>
    </div>
  );
}
