import React, { useEffect, useState } from "react";
import Select from "./components/Select";

const App = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      const countryFromServer = await fetchCountries();
      setCountry(countryFromServer);
    };
    getCountries();
  }, []);

  const fetchCountries = async () => {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await response.json();
    return data;
  };

  return (
    <div>
      <Select country={country} />
    </div>
  );
};

export default App;
