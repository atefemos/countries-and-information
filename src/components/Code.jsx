import React from "react";
import Phone from "../phone.png";

import "../App.css";

const Code = ({ country, selected }) => {
  return (
    <div className="box">
      <div className="code">Calling Code</div>
      <img src={Phone} className="phone" />
      {country.map(
        (item, index) =>
          item.name === selected && (
            <p className="num" key={index}>
              + {item.numericCode}
            </p>
          )
      )}
    </div>
  );
};

export default Code;
