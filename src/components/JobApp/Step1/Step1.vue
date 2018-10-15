<template>
  <div>
    <applicant-info-form></applicant-info-form>
    <applicant-details-form></applicant-details-form>
  </div>
</template>

<script>
import ApplicantInfoForm from "./ApplicantInfoForm.vue";
import ApplicantDetailsForm from "./ApplicationDetailsForm.vue";

export default {
  components: {
    ApplicantInfoForm,
    ApplicantDetailsForm
  }
};
</script>

<style>
</style>
