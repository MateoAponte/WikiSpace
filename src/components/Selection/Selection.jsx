import { PlanetsMode } from '@/data/Mode.js';
import { Illustration } from '../Illustration';
import { Description } from '../Description';
import { PlanetMode } from '../PlanetMode';
import { Info } from '../Info';
import { useStore } from '@/store/store';

export const Selection = () => {
  const {
    getInfoByPlanet,
    getIllustrationByMode,
    getDescriptionByMode,
    getSelectedPlanet,
    selectedMode,
    setSelectedMode,
  } = useStore();

  const hasGeoMode = () => {
    if (selectedMode === PlanetsMode[2]) {
      return getSelectedPlanet().images[PlanetsMode[2]];
    }
  };
  const getSourceByMode = () => {
    if (selectedMode === PlanetsMode[2] && getSelectedPlanet().images)
      return getSelectedPlanet().images[PlanetsMode[0]];
    return getIllustrationByMode();
  };

  return (
    <>
      <Illustration source={getSourceByMode()} sourceGeo={hasGeoMode()} />
      <Description
        {...getDescriptionByMode()}
        name={getSelectedPlanet().name}
      />
      <PlanetMode
        modes={[...PlanetsMode]}
        setSelectedMode={setSelectedMode}
        selectedMode={selectedMode}
      />
      <Info {...getInfoByPlanet()} />
    </>
  );
};
