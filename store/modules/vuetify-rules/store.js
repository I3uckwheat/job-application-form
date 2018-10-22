import { actions, mutations } from './actions-mutations';
import { state, getters } from './state-getters';

const vuetifyRules = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export default vuetifyRules;
