<template>
  <div>
    <applicant-info-form></applicant-info-form>
    <applicant-details-form></applicant-details-form>
    <continue-button toStep=2></continue-button>
  </div>
</template>

<script>
import ApplicantInfoForm from "./ApplicantInfoForm.vue";
import ApplicantDetailsForm from "./ApplicationDetailsForm.vue";
import ContinueButton from "../shared/ContinueButton.vue";

export default {
  components: {
    ApplicantInfoForm,
    ApplicantDetailsForm,
    ContinueButton
  }
};
</script>

<style>
</style>
