# React Weather Forecast App 🌦️

A clean, modern, and interactive weather forecast application built with React. This project fetches real-time data from the OpenWeatherMap API to provide current weather conditions, as well as hourly and daily forecasts for any city worldwide.

![Weather App Screenshot](.src/assets/screenshot-view.png) 
*Note: Replace the URL above with a link to your own screenshot.*

---

## ✨ Features

* **Search by City**: Find real-time weather data for any city in the world.
* **Current Weather Details**: Get up-to-the-minute information, including temperature, "feels like" temp, weather conditions, humidity, wind speed, pressure, and visibility.
* **Hourly & Daily Forecasts**: Easily toggle between a 24-hour forecast (in 3-hour intervals) and a 5-day daily forecast.
* **Interactive Detail Tabs**: Click on different metrics like "Humidity" or "Wind Speed" to view detailed descriptions and statuses.
* **Unit Conversion**: Switch between Celsius (°C) and Fahrenheit (°F) on the fly.
* **Dynamic Icons**: Weather icons change based on the conditions and time of day.
* **Responsive Design**: A clean layout that works on different screen sizes.

---

## 🛠️ Tech Stack

* **[React](https://react.dev/)**: A JavaScript library for building user interfaces.
* **[Vite](https://vitejs.dev/)**: A modern frontend build tool.
* **JavaScript (ES6+)**: Core programming language.
* **CSS3**: For styling and layout.
* **[OpenWeatherMap API](https://openweathermap.org/api)**: Used for fetching weather data.

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.
* npm
    ```sh
    npm install npm@latest -g
    ```

### Installation & Setup

1.  **Get a free API Key** at [https://openweathermap.org/api](https://openweathermap.org/api). You will need the key for the "5 day / 3 hour forecast" endpoint.

2.  Clone the repo
    ```sh
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    ```

3.  Navigate to the project directory
    ```sh
    cd your-repo-name
    ```

4.  Install NPM packages
    ```sh
    npm install
    ```

5.  Create a `.env` file in the root of your project and add your API key:
    ```
    VITE_API_KEY=your_api_key_here
    ```

6.  Run the development server
    ```sh
    npm run dev
    ```

Now, open [http://localhost:5173](http://localhost:5173) (or whatever port is shown in your terminal) in your browser to see the app.

---

## 📄 License

Distributed under the MIT License. See `LICENSE.txt` for more information.
