<template>
  <v-form ref="form">
    <high-school-form v-model="highSchool"></high-school-form>
    <undergrad-school-form v-model="undergrad"></undergrad-school-form>
    <past-employment-form v-model="pastEmployment"></past-employment-form>
    <references-form v-model="references" amount=3></references-form>
  </v-form>
 </template>

<script>
import HighSchoolForm from "./HighSchoolForm.vue";
import UndergradSchoolForm from "./UndergradSchoolForm/UndergradSchoolForm.vue";
import PastEmploymentForm from "./PastEmploymentForm/PastEmploymentForm.vue";
import ReferencesForm from "./ReferencesForm/ReferencesForm.vue";

export default {
  created() {
    // apply localStorage to data
    const formData = JSON.parse(localStorage.getItem('trJobApplication'));

    this.applyToHighschoolForm(formData);
    this.applyToUndergradForm(formData);
    this.applyToPastEmploymentForm(formData);
    this.applyToReferencesForm(formData);
  },
  data() {
    return {
      highSchool: {},
      undergrad: [],
      pastEmployment: [],
      references: []
    };
  },
  methods: {
    applyToHighschoolForm() {
      
    },
    applyToUndergradForm() {
      
    },
    applyToPastEmploymentForm() {

    },
    applyToReferencesForm() {

    }
  },
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
