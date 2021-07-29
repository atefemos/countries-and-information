import React from "react";

import "../App.css";

const Flag = ({ country, selected }) => {
  return (
    <div className="box">
      {country.map(
        (item, index) =>
          item.name === selected && (
            <img src={item.flag} alt="flag" key={index} />
          )
      )}
    </div>
  );
};

export default Flag;
