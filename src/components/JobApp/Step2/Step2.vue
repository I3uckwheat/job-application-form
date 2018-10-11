<template>
  <div>
    <high-school-form></high-school-form>
    <undergrad-school-form></undergrad-school-form>
    <continue-button toStep="3"></continue-button>
  </div>
 </template>

<script>
import HighSchoolForm from "./HighSchoolForm.vue";
import UndergradSchoolForm from "./UndergradSchoolForm.vue";
import ContinueButton from "../shared/ContinueButton.vue";
export default {
  components: {
    HighSchoolForm,
    UndergradSchoolForm,
    ContinueButton
  }
};
</script>

<style>
</style>
