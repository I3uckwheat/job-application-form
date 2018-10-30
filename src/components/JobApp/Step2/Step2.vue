<template>
  <v-form ref="form">
    <high-school-form v-model="highSchool" @input="updateInfo"></high-school-form>
    <undergrad-school-form v-model="undergrad" @input="updateInfo"></undergrad-school-form>
    <past-employment-form v-model="pastEmployment" @input="updateInfo"></past-employment-form>
    <references-form v-model="references" amount=3 @input="updateInfo"></references-form>
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
    const formData = JSON.parse(localStorage.getItem("trJobApplication"));

    this.applyToHighschoolForm(formData.education.fields.highSchool);
    this.applyToUndergradForm(formData.education.fields.undergraduate);
    this.applyToPastEmploymentForm(formData.employment.fields.jobs);
    this.applyToReferencesForm(formData.additional.fields.references);
  },
  data() {
    return {
      highSchool: {},
      undergrad: {},
      pastEmployment: [],
      references: {}
    };
  },
  methods: {
    updateInfo() {
      // hacky due to bad decisions earlier
      // avoiding vuex because of fullJobApp
      const currentData = JSON.parse(localStorage.getItem("trJobApplication"));
      const currentHighSchoolData = currentData.education.fields.highSchool;

      currentData.education.fields.highSchool = {
        ...currentHighSchoolData,
        ...this.highSchool
      };

      const currentUndergradData = currentData.education.fields.undergraduate;
      currentData.education.fields.undergraduate = {
        ...currentUndergradData,
        ...this.undergrad
      };

      currentData.employment.fields.jobs = [
        ...this.pastEmployment
      ];

      currentData.additional.fields.references = {
        ...this.references
      };

      localStorage.setItem("trJobApplication", JSON.stringify(currentData));
    },
    applyToHighschoolForm(formData) {
      this.highSchool.schoolName = formData.schoolName;
      this.highSchool.schoolAddress = formData.schoolAddress;
      this.highSchool.courseOfStudy = formData.courseOfStudy;
      this.highSchool.yearsCompleted = formData.yearsCompleted;
      this.highSchool.degree = formData.degree;
    },
    applyToUndergradForm(formData) {
      this.undergrad.schoolName = formData.schoolName;
      this.undergrad.schoolAddress = formData.schoolAddress;
      this.undergrad.courseOfStudy = formData.courseOfStudy;
      this.undergrad.yearsCompleted = formData.yearsCompleted;
      this.undergrad.degree = formData.degree;
    },
    applyToPastEmploymentForm(formData) {
      this.pastEmployment = formData;
    },
    applyToReferencesForm(formData) {
      this.references = formData;
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
