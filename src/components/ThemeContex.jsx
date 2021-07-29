import React, { createContext } from "react";

export const themes = {
  light: {
    backgroundColor: "#3d5f5d",
    color: "white",
  },
  dark: {
    backgroundColor: "#b9d6d4",
    color: "black",
  },
};
const ThemeContext = React.createContext(themes.dark);

export default ThemeContext;
