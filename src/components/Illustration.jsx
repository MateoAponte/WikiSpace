import { motion } from 'framer-motion';
import { useState } from 'react';
import { useEffect } from 'react';

export const Illustration = ({ source, sourceGeo }) => {
  const [_, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [realSource, setRealSource] = useState('');
  const [realSourceGeo, setRealSourceGeo] = useState('');

  const hasGeoImage = () => {
    if (sourceGeo) {
      return (
        <img
          className="illustration__geo"
          src={realSourceGeo}
          alt="Source planet geo illustration"
        />
      );
    }
  };

  useEffect(() => {
    // Inicia la animación de salida
    setIsExiting(true);

    // Espera un tiempo antes de ocultar el componente
    const timeout = setTimeout(() => {
      setIsVisible(false); // Oculta el componente después de la animación de salida
      setIsExiting(false); // Resetea el estado de salida
      setRealSource(source); // Actualiza el estado del source real
      setRealSourceGeo(sourceGeo); // Actualiza el estado del source real
    }, 300); // Este tiempo debe coincidir con la duración de la animación de salida

    return () => clearTimeout(timeout); // Limpiar el timeout si el componente se desmonta
  }, [source, sourceGeo]); // Escuchar cambios en la prop source

  return (
    <motion.picture
      initial={{ x: 100, y: 100, opacity: 0, scale: 0.5 }}
      animate={{
        x: 0,
        y: 0,
        opacity: isExiting ? 0 : 1,
        scale: isExiting ? 0.5 : 1,
      }}
      exit={{ x: -200, y: -200, opacity: 0, scale: 0.5 }}
      className="illustration"
      onAnimationComplete={() => {
        // Si la animación de salida se completa, ocultamos el componente
        if (isExiting) {
          setIsVisible(false);
        }
      }}
    >
      <source src={realSource} />
      <img
        className="illustration__planet"
        src={realSource}
        alt="Source planet illustration"
      />
      {hasGeoImage()}
    </motion.picture>
  );
};
