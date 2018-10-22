import { actions, mutations } from "./actions-mutations";
import { state, getters } from "./state-getters";

const jobApplicationFormData = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

export default jobApplicationFormData;
