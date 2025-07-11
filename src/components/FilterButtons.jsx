export default function FilterButtons({ activeFilter, onChangeFilter }) {
  return (
    <div className="filter-button">
      <button
        type="button"
        className={activeFilter === "Pressure" ? "active" : ""}
        onClick={() => onChangeFilter("Pressure")}
      >
        <span className="visually-hidden">Show</span>
        Pressure <span className="visually-hidden">Weather</span>
      </button>
      <button
        type="button"
        className={activeFilter === "Humidity" ? "active" : ""}
        onClick={() => onChangeFilter("Humidity")}
      >
        <span className="visually-hidden">Show</span>
        Humidity<span className="visually-hidden">Weather</span>
      </button>
      <button
        type="button"
        className={activeFilter === "Wind Speed" ? "active" : ""}
        onClick={() => onChangeFilter("Wind Speed")}
      >
        <span className="visually-hidden">Show</span>
        Wind Speed<span className="visually-hidden">Weather</span>
      </button>
      <button
        type="button"
        className={activeFilter === "Visibility" ? "active" : ""}
        onClick={() => onChangeFilter("Visibility")}
      >
        <span className="visually-hidden">Show</span>
        Visibility<span className="visually-hidden">Weather</span>
      </button>
    </div>
  );
}
