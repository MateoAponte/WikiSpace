import { create } from 'zustand';
import createPlanetsSlice from './slice/planets/planetsSlice';

export const useStore = create((set, get) => ({
  ...createPlanetsSlice(set, get),
}));
