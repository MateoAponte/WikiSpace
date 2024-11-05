import actions from './actions.js';
import state from './state.js';

const planetsSlice = (set, get) => ({
  ...state,
  ...actions(set, get),
});

export default planetsSlice;
