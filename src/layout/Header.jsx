import { useStore } from '@/store/store';
import { motion } from 'framer-motion';

export const Header = () => {
  const { planets, setSelectionIndex, selectionIndex } = useStore();

  const handleClick = (index) => {
    setSelectionIndex(index);
  };

  const getSelectedIndex = (index) => {
    return selectionIndex === index ? 'active' : '';
  };

  // Definir los variantes para la animación
  const variants = {
    hidden: { y: -100, opacity: 0, scale: 0.5 },
    visible: (index) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay: index * 0.1, // Retraso basado en el índice
        duration: 0.05,
      },
    }),
  };

  return (
    <div className="header">
      <div className="header__brand">THE PLANETS</div>
      <div className="header__links">
        {planets.map((planet, index) => (
          <motion.a
            key={index}
            initial="hidden"
            animate="visible"
            variants={variants}
            custom={index} // Pasar el índice como prop personalizada
            className={getSelectedIndex(index)}
            href={`#${planet.name}`}
            onClick={() => handleClick(index)}
          >
            {planet.name}
          </motion.a>
        ))}
      </div>
    </div>
  );
};
