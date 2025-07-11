export default function WeatherDescription({ activeFilter, pressure, humidity, windspeed, visibility }) {
  let value;
  let status;
  let description;
  let unit;

  if (activeFilter === "Pressure") {
    unit = "mb";
    value = pressure;
    if (pressure < 1009) {
      status = "Low";
      description = "Low air pressure often indicates cloudy weather or a chance of rain.";
    } else if (pressure < 1023) {
      status = "Normal";
      description = "Normal air pressure usually indicates stable and clear weather.";
    } else if (pressure < 9999) {
      status = "High";
      description = "High air pressure is usually associated with dry and clear weather.";
    }
  } else if (activeFilter === "Humidity") {
    unit = "%";
    value = humidity;
    if (humidity < 40) {
      status = "Low";
      description = "The air feels dry. Skin may feel dry faster than usual.";
    } else if (humidity < 61) {
      status = "Ideal";
      description = "A comfortable and ideal humidity level for the human body";
    } else if (humidity < 101) {
      status = "High";
      description = "The air feels very humid and muggy. It might feel hotter than the actual temperature.";
    }
  } else if (activeFilter === "Wind Speed") {
    unit = "km/h";
    value = windspeed;
    if (windspeed < 6) {
      status = "Calm";
      description = "Light breeze, smoke rises vertically";
    } else if (windspeed < 21) {
      status = "Moderate";
      description = "Leaves and small twigs are in constant motion. Enough to fly a kite.";
    } else if (windspeed < 41) {
      status = "Strong";
      description = "Small trees sway. Umbrellas are hard to hold.";
    }
  } else if (activeFilter === "Visibility") {
    unit = "km";
    visibility = visibility / 1000;
    value = visibility;
    if (visibility < 2) {
      status = "Very Poor";
      description = "Visibility is severely limited due to thick fog. Driving can be dangerous.";
    } else if (visibility < 5) {
      status = "Poor";
      description = "Visibility is reduced due to haze or light fog. Drive with caution.";
    } else if (visibility < 11) {
      status = "Moderate";
      description = "Good visibility, though some distant objects may be obscured by light haze.";
    } else if (visibility < 1000) {
      status = "Excellent";
      description = "Excellent visibility. The air is very clear and objects can be seen from a great distance.";
    }
  }

  return (
    <div className="description">
      <div className="status">
        <p className="stat-num">
          {value}
          <span> ({unit})</span>
        </p>

        <p className="stat-para">{status}</p>
      </div>
      <div className="detail-desc">
        <p>{description}</p>
      </div>
    </div>
  );
}
