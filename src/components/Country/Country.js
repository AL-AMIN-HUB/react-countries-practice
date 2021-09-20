import React from "react";

const Country = (props) => {
  const { name, flag, population, capital } = props.country;
  return (
    <div className="bg-info p-2 m-4 rounded-3 shadow">
      <h4> Name: {name} </h4>
      <img className="img-fluid w-50" src={flag} alt="" />
      <p>Population: {population} </p>
      <h5>Capital: {capital} </h5>
    </div>
  );
};

export default Country;
