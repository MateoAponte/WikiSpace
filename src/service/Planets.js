import axios from 'axios';

class PlanetsService {
  url = '';

  constructor() {
    this.url = import.meta.env.VITE_APP_PLANETS_URL;
  }

  getPlanets() {
    return axios.get(`/data/space.json`);
  }
}

export default new PlanetsService();
