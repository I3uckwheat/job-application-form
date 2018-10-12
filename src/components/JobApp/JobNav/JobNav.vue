<template>
  <v-stepper class="mx-1" alt-labels>
    <v-switch :label="'Advanced Form'" v-model="advancedToggle"></v-switch>
    <v-stepper-header>
      <v-stepper-step step="1" :complete="stepNum === 'step1'">General Information</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step = "2" :complete="stepNum === 'step2'"><span class="center">Education & Employment Experience</span></v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="2" :complete="stepNum === 'step3'">Review & Submit</v-stepper-step>
    </v-stepper-header>
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
    stepNum() {
      return this.$route.name;
    }
  }
};
</script>

<style scoped>
.center {
  text-align: center;
}
</style>
