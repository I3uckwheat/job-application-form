import { actions, mutations } from "./actions-mutations";
import { state, getters } from "./state-getters";

const usStatesAndTerritories = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

export default usStatesAndTerritories;
