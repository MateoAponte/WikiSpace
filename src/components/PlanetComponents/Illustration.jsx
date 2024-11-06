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
    setIsExiting(true);

    const timeout = setTimeout(() => {
      setIsVisible(false);
      setIsExiting(false);
      setRealSource(source);
      setRealSourceGeo(sourceGeo);
    }, 500);

    return () => clearTimeout(timeout); // Limpiar el timeout si el componente se desmonta
  }, [source, sourceGeo]); // Escuchar cambios en la prop source

  return (
    <motion.picture
      animate={{
        x: isExiting ? 600 : 0,
        y: isExiting ? -250 : 0,
        opacity: isExiting ? 0 : 1,
        scale: isExiting ? 0.05 : 1,
      }}
      transition={{
        x: { duration: 0.4 },
        y: { duration: 0.5 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.15 },
        duration: 1.2,
      }}
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
