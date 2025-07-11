import { useRef, useEffect } from "react";

export default function Forecast({ activeForecast, forecastDataList }) {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const element = scrollContainerRef.current;

    if (element) {
      const onWheel = (e) => {
        e.preventDefault();

        element.scrollLeft += e.deltaY;
      };

      element.addEventListener("wheel", onWheel);

      return () => element.removeEventListener("wheel", onWheel);
    }
  }, []);

  const oneDayData = forecastDataList.slice(0, 8);

  let displayForecast;
  if (activeForecast === "Hourly") {
    displayForecast = (
      <div className="forecast-hourly" ref={scrollContainerRef}>
        {oneDayData.map((hour) => {
          const date = new Date(hour.dt * 1000);
          const time = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
          const iconUrl = `https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`;
          const temp = Math.round(hour.main.temp);

          return (
            <div className="hourly-item" key={hour.dt}>
              <p>{time}</p>
              <img src={iconUrl} alt={hour.weather[0].description} />
              <span>{temp}°</span>
            </div>
          );
        })}
      </div>
    );
  } else if (activeForecast === "Daily") {
    const groupedByDay = {};
    forecastDataList.forEach((item) => {
      const localDate = new Date(item.dt * 1000);
      const dateKey = localDate.toLocaleDateString("en-US");
      if (!groupedByDay[dateKey]) {
        groupedByDay[dateKey] = [];
      }
      groupedByDay[dateKey].push(item);
    });

    const dailySummary = Object.values(groupedByDay).map((dayGroup) => {
      const minTemp = Math.round(Math.min(...dayGroup.map((item) => item.main.temp_min)));
      const maxTemp = Math.round(Math.max(...dayGroup.map((item) => item.main.temp_max)));

      const representativeItem = dayGroup[Math.floor(dayGroup.length / 2)];
      const date = new Date(representativeItem.dt * 1000);
      const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
      const iconCode = representativeItem.weather[0].icon;

      return {
        key: representativeItem.dt,
        dayName: dayName,
        icon: iconCode,
        maxTemp: maxTemp,
        minTemp: minTemp,
      };
    });

    displayForecast = (
      <div className="forecast-daily" ref={scrollContainerRef}>
        {dailySummary.map((dayData) => {
          const iconUrl = `https://openweathermap.org/img/wn/${dayData.icon}@2x.png`;
          return (
            <div className="daily-item" key={dayData.key}>
              <p className="daily-day">{dayData.dayName}</p>
              <img src={iconUrl} alt="weather icon" />
              <span className="daily-temp">
                {dayData.maxTemp}° / {dayData.minTemp}°
              </span>
            </div>
          );
        })}
      </div>
    );
  }

  return <>{displayForecast}</>;
}
