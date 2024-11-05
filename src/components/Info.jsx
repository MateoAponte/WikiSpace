import numeral from 'numeral';
import React, { useEffect, useState } from 'react';

export const Info = ({ rotation, revolution, radius, temperature }) => {
  const [animatedRotation, setAnimatedRotation] = useState(0);
  const [animatedRevolution, setAnimatedRevolution] = useState(0);
  const [animatedRadius, setAnimatedRadius] = useState(0);
  const [animatedTemperature, setAnimatedTemperature] = useState(0);

  const animateValue = (value, setter, currentValue) => {
    const duration = 1000; // Duración de la animación en milisegundos
    const start = currentValue; // Valor inicial es el último valor mostrado

    const end = value; // Valor final
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1); // Progreso entre 0 y 1
      const currentValue = start + (end - start) * progress;

      setter(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    animateValue(rotation, setAnimatedRotation, animatedRotation);
    animateValue(revolution, setAnimatedRevolution, animatedRevolution);
    animateValue(radius, setAnimatedRadius, animatedRadius);
    animateValue(temperature, setAnimatedTemperature, animatedTemperature);
  }, [rotation, revolution, radius, temperature]);

  const getFormat = (value) => {
    return numeral(value).format('0,0.000');
  };
  const getDays = (time) => {
    return `${getFormat(time)} Days`; // Usar toFixed para limitar a 2 decimales
  };
  const getKm = (large) => {
    return `${getFormat(large)} KM`; // Usar toFixed para limitar a 2 decimales
  };
  const getTemp = (temp) => {
    return `${getFormat(temp)} °C`; // Cambié KM a °C para la temperatura
  };

  return (
    <section className="info">
      <div className="info__section">
        <h5 className="info__section-title">Rotation Time</h5>
        <h2 className="info__section-content">{getDays(animatedRotation)}</h2>
      </div>
      <div className="info__section">
        <h5 className="info__section-title">Revolution Time</h5>
        <h2 className="info__section-content">{getDays(animatedRevolution)}</h2>
      </div>
      <div className="info__section">
        <h5 className="info__section-title">Radius</h5>
        <h2 className="info__section-content">{getKm(animatedRadius)}</h2>
      </div>
      <div className="info__section">
        <h5 className="info__section-title">Average Temp.</h5>
        <h2 className="info__section-content">
          {getTemp(animatedTemperature)}
        </h2>
      </div>
    </section>
  );
};
