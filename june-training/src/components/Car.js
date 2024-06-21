import React, { useState } from 'react';

function CarComponent() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateCar = () => {
    setCar(prevCar => ({
      ...prevCar,
      color: "black",
      year: "1975"
    }));
  };

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button onClick={updateCar}>Update Car</button>
    </>
  );
}

export default CarComponent;
