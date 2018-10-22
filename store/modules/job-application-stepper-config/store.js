import { actions, mutations } from './actions-mutations';
import { state, getters } from './state-getters';

const jobApplicationStepperConfig = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export default jobApplicationStepperConfig;
