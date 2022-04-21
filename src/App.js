import React, { useState } from "react";
const api = {
  key: "1411ab1012b3a7e76377f336228285ce",
  base: "https://api.openweathermap.org/data/2.5/",
};


function App() {

  
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  const buildDate = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let month = months[d.getMonth()];
    let day = days[d.getDay()];
    let date = d.getDate();
    let year = d.getFullYear();

    return `${day}, ${month} ${date} ${year}`;
  };

  //   function getDate()
  // {
  //     let currentDate = new Date();
  //     let cMonth = currentDate.getMonth() + 1;
  //     let cDay = currentDate.getDate();
  //     let cYear = currentDate.getFullYear();

  //     return cMonth + "/" + cDay + "/" + cYear;
  // }
  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 16
            ? "app warm"
            : "app"
          : "app"
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search Zip Code..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{buildDate(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round((weather.main.temp * 9) / 5) + 32}°F
              </div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
      <footer>Page created by Keng Yang</footer>
    </div>
  );
}


export default App;
