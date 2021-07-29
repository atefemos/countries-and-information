import React from "react";
import "../App.css";

const Button = ({ text, rl, onClick }) => {
  return (
    <button className={`btn ${rl}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
