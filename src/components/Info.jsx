import React, { useContext } from "react";
import "../App.css";
import ThemeContext from "./ThemeContex";


const Info = ({ country, selected }) => {
  const th = useContext(ThemeContext);
  return (
    <div className="info" style={th}>
      {country.map((item, index) =>
        item.name === selected ? (
          <div key={index}>
            <h3>{item.name}</h3>
            <hr />
            <p>
              <span>Capital: </span> {item.capital}
            </p>
            <p>
              <span>Region: </span>
              {item.region}
            </p>
            <p>
              <span>Population: </span>
              {item.population}
            </p>
            <p>
              <span>Language: </span>
              {item.languages[0].nativeName}
            </p>
            <p>
              <span>Timezones: </span>
              {item.timezones}
            </p>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default Info;
