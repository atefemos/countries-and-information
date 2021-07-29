import React, { useContext } from "react";
import Sun from "../sun.png";
import "../App.css";
import ThemeContext from "./ThemeContex";

const Weather = ({ weather }) => {
  const th = useContext(ThemeContext);

  return (
    <div className="info" style={th}>
      <div className="code">Capital Weather Report</div>
      <img src={Sun} />
      <p className="main-w">{weather.weather[0].description}</p>
      <p>
        <span>Wind Speed : </span>
        {weather.wind.speed} km/h
      </p>
      <p>
        <span>Tempreture : </span>
        {weather.main.temp} °kelvin
      </p>
      <p>
        <span>Humidity : </span>
        {weather.main.humidity} %
      </p>
    </div>
  );
};

export default Weather;
