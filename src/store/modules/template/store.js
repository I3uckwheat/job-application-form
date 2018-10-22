import { actions, mutations } from "./actions-mutations";
import { state, getters } from "./state-getters";

const stepperConfig = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

export default stepperConfig;
