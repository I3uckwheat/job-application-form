<template>
  <v-stepper class="mx-1" :value="currentStep" alt-labels>
    
    <v-switch 
      :label="'Advanced Form'" 
      :value="$route.query.form === 'advanced'"
      @change="switchFormType()"
      class="mx-3"
    ></v-switch>

    <v-stepper-header>
      <v-stepper-step step="1" :complete="isComplete(1)">General Information</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="2" :complete="isComplete(2)"><span class="center">Education & Employment Experience</span></v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="3" :complete="isComplete(3)">Review & Submit</v-stepper-step>
    </v-stepper-header>
    <v-stepper-items>
      <slot></slot>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
export default {
  data() {
    return {
      advancedToggle: false
    };
  },
  computed: {
    currentStep() {
      return Number(this.$route.name.slice(-1));
    }
  },
  methods: {
    isComplete(stepNumber) {
      return this.currentStep > stepNumber;
    },
    switchFormType() {
      this.$router.push({
        path: "",
        query: {
          form: "advanced"
        }
      });
    }
  }
};
</script>

<style scoped>
.center {
  text-align: center;
}
</style>
