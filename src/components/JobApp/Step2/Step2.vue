<template>
  <v-form ref="form">
    <high-school-form></high-school-form>
    <undergrad-school-form></undergrad-school-form>
    <past-employment-form></past-employment-form>
    <references-form></references-form>
  </v-form>
 </template>

<script>
import HighSchoolForm from "./HighSchoolForm.vue";
import UndergradSchoolForm from "./UndergradSchoolForm/UndergradSchoolForm.vue";
import PastEmploymentForm from "./PastEmploymentForm/PastEmploymentForm.vue";
import ReferencesForm from "./ReferencesForm/ReferencesForm.vue";

export default {
  components: {
    HighSchoolForm,
    UndergradSchoolForm,
    PastEmploymentForm,
    ReferencesForm
  },
  beforeRouteLeave(to, from, next) {
    next(this.$refs.form.validate());

  }
};
</script>

<style>
</style>
