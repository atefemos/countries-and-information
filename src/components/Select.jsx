import React, { useEffect, useState, useContext } from "react";
import "../App.css";
import Flag from "./Flage";
import Code from "./Code";
import Info from "./Info";
import Button from "./Button";
import Shearch from "./Search";
import Weather from "../components/Weather";
import ThemeContext, { themes } from "./ThemeContex";

const Select = ({ country }) => {
  const [showHeader, setShowHeader] = useState(true);
  const [showInfo, setShowInfo] = useState(false);

  const [selected, setSelected] = useState("Iraq");

  const [weather, setWeather] = useState("");
  const [theme, setTheme] = useState(themes.dark);

  const [searchedCountry, setSearchedCountry] = useState("");

  // useEffect(() => {
  //   console.log(selected);
  // });

  const handleShow = (e) => {
    setShowHeader(false);
    setShowInfo(true);
    let select = e.target.value;
    setSelected(select);
  };

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${selected}&appid=d47f4877e32b09e186c757293d2e1b23`
      );
      const wData = await response.json();
      console.log(wData);
      const weatherFromServer = await wData;
      setWeather(weatherFromServer);
    };
    fetchWeather();
    console.log(weather);
  }, [selected]);

  const changeColor = () => {
    setTheme((theme) => {
      return theme === themes.light ? themes.dark : themes.light;
    });
  };

  const handleBack = () => {
    setShowHeader(true);
    setShowInfo(false);
    setSelected("Iraq");
  };

  const handleSearch = (e) => {
    setSearchedCountry(e.target.value);
    console.log(searchedCountry);
  };

  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <div className="header" style={theme}>
          <Button onClick={changeColor} text="Change Theme" rl="right" />
          {/* <Shearch /> */}
          <Button onClick={handleBack} text="Back to List" />
        </div>
        {showHeader && (
          <div>
            <Shearch onChange={handleSearch} />
            <select className="select" onChange={handleShow} defaultValue="0">
              <option value="0">Choose a Country ...</option>
              {country.map((item, index) => (
                <option value={item.id} key={index}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        )}
        {showInfo && (
          <div className="flex">
            <div>
              <Flag country={country} selected={selected} />
              <Code country={country} selected={selected} />
            </div>
            <div>
              <Info country={country} selected={selected} />
              <Weather
                country={country}
                selected={selected}
                weather={weather}
              />
            </div>
          </div>
        )}
      </ThemeContext.Provider>
    </div>
  );
};

export default Select;
