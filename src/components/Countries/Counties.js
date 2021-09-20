import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Counties = () => {
  const [countries, setCountris] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountris(data));
  }, []);
  return (
    <div>
      <h3>Load Countries: {countries.length} </h3>
      <div className="container-fluid countries">
        {countries.map((country) => (
          <Country country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Counties;
