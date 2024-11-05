import PlanetsService from '@/service/Planets.js';
import { PlanetsMode } from '@/data/Mode.js';

const actions = (set, get) => ({
  setPlanets: (payload) => set(() => ({ planets: [...payload] })),
  setSelectionIndex: (payload) =>
    set(() => ({ selectionIndex: payload, selectedMode: PlanetsMode[0] })),
  getPlanets: async () =>
    await PlanetsService.getPlanets().then((response) => {
      set(() => ({ planets: response.data }));
    }),
  setSelectedMode: (payload) => {
    set(() => ({ selectedMode: payload }));
  },
  getSelectedPlanet: () => {
    return get().planets[get().selectionIndex] || {};
  },
  getInfoByPlanet: () => {
    const { rotation, revolution, radius, temperature } =
      get().getSelectedPlanet();
    return { rotation, revolution, radius, temperature };
  },
  getSelectedPlanetByMode: () => {
    const mode = get().selectedMode;
    return get().getSelectedPlanet()[mode] || {};
  },
  getDescriptionByMode: () => {
    const { content, source } = get().getSelectedPlanetByMode() || {
      content: '',
      source: '',
    };
    return { content, source };
  },
  getIllustrationByMode: () => {
    const mode = get().selectedMode;
    const source = get().getSelectedPlanet()?.images?.[mode] || '';
    return source;
  },
});

export default actions;
