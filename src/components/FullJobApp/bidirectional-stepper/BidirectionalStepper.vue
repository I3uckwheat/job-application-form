<template>
  <v-layout row wrap>
    <v-flex>
      <!-- VERTICAL stepper for tablet/mobile resolutions -->
      <v-stepper
          id="VerticalStepper"
          vertical
          v-model="activeStep"
          class="bs-stepper bs-vertical-stepper hidden-md-and-up grey lighten-3">

        <template v-for="step in this.config.steps">
          <div :key="step.id">
            <!-- Step Header Bar -->
            <v-stepper-step
                editable
                :step="step.id"
            >
              <div class="bs-step-label">{{ step.label }}</div>
            </v-stepper-step>

            <v-stepper-content :step="step.id" class="grey lighten-4">

              <!-- dynamically insert components & preserves their state -->
              <keep-alive>
                <component
                    :is="step.component"
                    :ref="'VerticalStep' + step.id"
                    :model="model"
                    :read-only="readOnly">
                </component>
              </keep-alive>

              <!-- Step Navigation Buttons -->
              <v-layout row wrap>
                <v-flex xs12 text-xs-right class="ma-3">
                  <v-btn
                      v-if="step.id !== 1"
                      large
                      color="secondary"
                      @click="previousStep"
                      class="mx-2 px-3">
                    {{ previousLabel }}
                  </v-btn>

                  <v-btn
                      v-if="step.id !== config.steps.length"
                      large
                      color="primary"
                      @click="nextStep"
                      class="mx-2 px-3">
                    {{ nextLabel }}
                  </v-btn>

                  <v-btn
                      v-if="step.id === config.steps.length"
                      :loading="isSubmittingStepper"
                      :disabled="isSubmittingStepper || readOnly"
                      large
                      @click="submit"
                      class="teal lighten-1 mx-2 px-3">
                    {{ submitLabel }}
                  </v-btn>
                </v-flex>
              </v-layout>

              <!-- Cancel Stepper -->
              <v-layout row wrap v-if="!readOnly">
                <v-flex xs12 text-xs-left class="pa-3">
                  <div class="cancel-button" @click="modals.cancelStepper = true">
                    {{ cancelLabel }}
                  </div>
                </v-flex>
              </v-layout>

            </v-stepper-content>
          </div>
        </template>

      </v-stepper>

      <!-- HORIZONTAL stepper for desktop resolutions -->
      <v-stepper
          id="HorizontalStepper"
          alt-labels
          v-model="activeStep"
          class="bs-stepper bs-horizontal-stepper hidden-sm-and-down grey lighten-3">

        <!-- Step Navigation Bar -->
        <v-stepper-header>
          <template v-for="step in config.steps">
            <div :key="step.id">
              <v-stepper-step
                  :step="step.id"
                  :editable="furthestStep >= step.id">
                <div class="bs-step-label">{{ step.label }}</div>
              </v-stepper-step>
              <v-divider v-if="step.id !== config.steps.length"></v-divider>
            </div>
          </template>

        </v-stepper-header>

        <v-stepper-items v-for="step in config.steps" :key="step.id">
          <v-stepper-content :step="step.id" class="grey lighten-4">

            <!-- dynamically insert components & preserves their state -->
            <keep-alive>
              <component
                  :is="step.component"
                  :ref="'HorizontalStep' + step.id"
                  :model="model"
                  :read-only="readOnly">
              </component>
            </keep-alive>

            <!-- Step Navigation Buttons -->
            <v-layout row wrap>
              <v-flex xs12 text-xs-right class="ma-3">
                <v-btn
                    v-if="step.id !== 1"
                    large
                    color="secondary"
                    @click="previousStep"
                    class="mx-2 px-3">
                  {{ previousLabel }}
                </v-btn>

                <v-btn
                    v-if="step.id !== config.steps.length"
                    large
                    color="primary"
                    @click="nextStep"
                    class="mx-2 px-3">
                  {{ nextLabel }}
                </v-btn>

                <v-btn
                    v-if="step.id === config.steps.length"
                    :loading="isSubmittingStepper"
                    :disabled="isSubmittingStepper || readOnly"
                    large
                    @click="submit"
                    class="teal lighten-1 mx-2 px-3 submit-button">
                  {{ submitLabel }}
                </v-btn>
              </v-flex>
            </v-layout>

            <!-- Cancel Stepper -->
            <v-layout row wrap v-if="!readOnly">
              <v-flex xs12 text-xs-left class="pa-3">
                <div class="cancel-button" @click="modals.cancelStepper = true">
                  {{ cancelLabel }}
                </div>
              </v-flex>
            </v-layout>

          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-flex>

    <!-- Validation Errors Warning -->
    <v-dialog v-model="modals.errorNotice" max-width="320">
      <v-card>
        <v-card-title>Form Errors</v-card-title>
        <v-card-text>
          <div class="text-xs-center mb-3">
            <v-icon large color="red lighten-1">error</v-icon>
          </div>
          <v-subheader>Please correct errors on the form before continuing.</v-subheader>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" class="mb-1" @click="modals.errorNotice = false">
            Ok, I'll Fix Them
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Cancel Application Confirmation -->
    <v-dialog v-model="modals.cancelStepper" max-width="320">
      <v-card>
        <v-card-title>Cancel Form?</v-card-title>
        <v-card-text>
          <div class="text-xs-center mb-3">
            <v-icon large color="red lighten-1">error</v-icon>
          </div>
          <v-subheader>Are you sure you want to cancel?</v-subheader>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="secondary" class="mb-1" @click="modals.cancelStepper = false">
            No
          </v-btn>
          <v-btn class="confirm-cancel mb-1" color="red lighten-1" @click="cancelStepper">
            Yes, Delete It
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import Vue from "vue";

export default {
  name: "bidirectional-stepper",

  /**
   * Props
   */
  props: {
    config: {
      type: Object,
      required: true
    },

    model: {
      type: Object,
      required: true
    },

    service: {
      type: Object,
      required: true
    },

    nextLabel: {
      type: String,
      required: false
    },

    previousLabel: {
      type: String,
      required: false
    },

    submitLabel: {
      type: String,
      required: false
    },

    cancelLabel: {
      type: String,
      required: false
    }
  },

  /**
   * Data
   */
  data() {
    return {
      readOnly: false,
      activeStep: false,
      furthestStep: 1,
      isSubmittingStepper: false,
      stepsLoadedCounter: 0,
      errors: [],

      modals: {
        errorNotice: false,
        cancelStepper: false
      }
    };
  },

  /**
   * Methods
   */
  methods: {
    onStepChange() {
      /**
       * redirect router to the active step's alias
       */
      const activeStepConfig = this.config.steps.filter(
        element => element.id === this.activeStep
      )[0];

      this.$router.push({
        path: activeStepConfig.routeAlias,
        query: this.$route.query
      });

      /**
       * Scroll the window to the top of the stepper bar
       *  - regardless of whether it's vertical or horizontal
       *  - regardless of whether we're in an IFRAME or not
       *  - only if the page has been scrolled down past the stepper bar
       */
      if (window.top.pageYOffset > 150) {
        const horizontalStepper = document.querySelector("#HorizontalStepper");
        const verticalStepper = document.querySelector("#VerticalStepper");
        const isHorizontal = this.isHidden(verticalStepper);
        let y = this.findTop(
          isHorizontal ? horizontalStepper : verticalStepper
        );

        // add extra spacing when inside an IFRAME
        if (window.top !== window.self) {
          y += 210;
        }

        // only scroll up; never down (avoids unwanted jumps)
        if (window.top.pageYOffset > y + 150) {
          window.top.scrollTo(0, y);
        }
      }
    },

    isHidden(element) {
      const style = window.self.getComputedStyle(element);
      return style.display === "none";
    },

    findTop(element) {
      const rect = element.getBoundingClientRect();
      return rect.top + window.self.scrollY;
    },

    getFirstInvalidStep() {
      const validSteps = [];

      this.config.steps.forEach(element => {
        if (this.validateStep(element.id)) {
          validSteps.push(element.id);
        }
      });

      let i = 1;

      while (validSteps.includes(i)) {
        i += 1;
      }

      this.furthestStep = i;

      return i;
    },

    validateStep(stepId) {
      try {
        const horizontalValid = this.$refs[
          `HorizontalStep${stepId}`
        ][0].$refs.form.validate();
        this.$refs[`VerticalStep${stepId}`][0].$refs.form.validate();

        return horizontalValid;
      } catch (e) {
        this.errors.push(e.message);
        return false;
      }
    },

    nextStep() {
      if (!this.validateStep(this.activeStep)) {
        this.modals.errorNotice = true;

        return false;
      }

      this.activeStep = this.activeStep + 1;

      return true;
    },

    previousStep() {
      this.activeStep = this.activeStep - 1;
      return true;
    },

    submit() {
      this.isSubmittingStepper = true;

      this.service
        .create(this.model)
        .then(response => {
          this.isSubmittingStepper = false;
          this.$emit("stepper-completed", response);
        })
        .catch(e => {
          this.isSubmittingStepper = false;
          this.errors.push(e);
        });
    },

    /**
     * sync URL with stepper
     */
    syncActiveStepToUrl() {
      /**
       * Redirect URL to step 1 if it doesn't match a specific step
       */
      const urlStepMatch = this.config.steps.filter(element => {
        const path = window.location.pathname
          .toLowerCase()
          .replace("/e-comedge", "");
        return element.routeAlias === path;
      });

      if (urlStepMatch.length === 0) {
        this.activeStep = 1; // triggers `watch`
        return true;
      }

      /**
       * Make active step match whats in the URL
       * Don't allow user to go further than the first invalid step
       */
      const firstInvalidStep = this.getFirstInvalidStep();
      const targetStep = this.config.steps.filter(element => {
        const path = window.location.pathname
          .toLowerCase()
          .replace("/e-comedge", "");
        return element.routeAlias === path;
      })[0];

      this.activeStep =
        firstInvalidStep < targetStep.id // triggers `watch`
          ? firstInvalidStep
          : targetStep.id;

      return true;
    },

    /**
     * set defaults for step button labels
     */
    setLabelDefaultOnButtons() {
      this.nextLabel = this.nextLabel || "Next";
      this.previousLabel = this.previousLabel || "Previous";
      this.submitLabel = this.submitLabel || "Submit";
      this.cancelLabel = this.cancelLabel || "Cancel";
    },

    /**
     * load-in dynamic step components based on `config` prop
     */
    loadStepContentComponents() {
      this.config.steps.forEach(step => {
        const pascalCased = this._.upperFirst(this._.camelCase(step.component));

        Vue.component(pascalCased, () =>
          import(`../${step.component}/${pascalCased}`)
        );
      });
    },

    cancelStepper() {
      this.$emit("stepper-canceled");
      this.modals.cancelStepper = false;
    },

    /**
     * Make forms read-only if specified in query string
     */
    activateReadOnly() {
      if (this.$route.query.readOnly === "true") {
        this.readOnly = true;
      }
    }
  },

  /**
   * Computed Properties
   */
  computed: {},

  /**
   * Watched Properties
   */
  watch: {
    activeStep() {
      this.onStepChange();
      this.getFirstInvalidStep();
    }
  },

  /**
   * Lifecycle Hooks
   */
  created() {
    this.syncActiveStepToUrl();
    this.activateReadOnly();
    this.setLabelDefaultOnButtons();
    this.loadStepContentComponents();

    window.onpopstate = () => {
      this.syncActiveStepToUrl();
    };
  }
};
</script>

<style scoped>
.bs-vertical-stepper .bs-step-label {
  font-size: 150%;
}

.bs-horizontal-stepper .bs-step-label {
  text-align: center;
}

.submit-button {
  color: white;
}

.cancel-button {
  font-size: 80%;
  text-decoration: underline;
  color: #6d6d6d;
  cursor: pointer;
}

.confirm-cancel {
  color: white;
}
</style>
