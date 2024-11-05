import { useStore } from '@/store/store';
import { useEffect } from 'react';
import { Selection } from '@/components/Selection/Selection';

export const PlanetWiki = () => {
  const { getPlanets } = useStore();

  useEffect(() => {
    const fetchPlanets = async () => {
      await getPlanets();
    };

    fetchPlanets();
  }, []);

  return <Selection />;
};
