import React, { useState, useEffect } from "react";

const AgeComponent = () => {
  const [age, setAge] = useState(calculateAge());

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(calculateAge());
    }, 86400000); // Actualiza una vez al día (86400000 ms = 1 día)

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, []);

  function calculateAge() {
    const birthDate = new Date(2000, 10, 7); // Los meses en JavaScript son 0-indexed, por lo que noviembre es 10
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--; // Ajusta si aún no ha llegado al cumpleaños de este año
    }

    return age;
  }

  return (
    <div className="relative flex flex-col bg-trueorange text-palegray min-h-full items-center justify-center mx-auto">
      <h3 className=" uppercase">Age</h3>
      <h1 className=" text-7xl font-extrabold">{age}</h1>
      <h3 className=" uppercase font-semibold">years old</h3>
    </div>
  );
};

export default AgeComponent;
