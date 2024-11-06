import { useStore } from '@/store/store';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import IconClose from '@/assets/image/close.svg';

export const DrawerMenu = ({ show }) => {
  const [drawerClass, setDrawerClass] = useState('drawer-menu');
  const { planets, setSelectionIndex, selectionIndex } = useStore();

  const handleClick = (index) => {
    setSelectionIndex(index);
    handleMenuClick();
  };
  const getSelectedIndex = (index) => {
    return selectionIndex === index ? 'active' : '';
  };

  useEffect(() => {
    setDrawerClass('drawer-menu drawer-menu--active');
  }, []);
  const handleMenuClick = () => {
    setDrawerClass('drawer-menu');
    setTimeout(() => {
      show(false);
    }, 200);
  };

  // Definir los variantes para la animación
  const variants = {
    hidden: { x: -150, opacity: 0 },
    visible: (index) => ({
      x: 0,
      opacity: 1,
      transition: {
        mass: 1, // Masa del objeto animado
        delay: index * 0.1, // Retraso basado en el índice
        duration: 0.05,
      },
    }),
  };

  return (
    <div className={drawerClass}>
      <div className="drawer-menu__header">
        <h3 className="drawer-menu__header-title">THE PLANETS</h3>
        <div className="drawer-menu__header-close" onClick={handleMenuClick}>
          <img src={IconClose} alt="Close icon" />
        </div>
      </div>
      <div className="drawer-menu__links">
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
