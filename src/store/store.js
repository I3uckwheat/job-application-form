import Vue from 'vue';
import Vuex from 'vuex';
import jobApplicationStepperConfig from './modules/job-application-stepper-config/store';
import jobApplicationFormData from './modules/job-application-form-data/store';
import usStatesAndTerritories from './modules/us-states-and-territories/store';
import vuetifyRules from './modules/vuetify-rules/store';

Vue.use(Vuex);

// sa.TODO: load asynchronously?

export default new Vuex.Store({
  modules: {
    jobApplicationStepperConfig,
    jobApplicationFormData,
    usStatesAndTerritories,
    vuetifyRules,
  },
});
