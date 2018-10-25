<template>
  <div>
    <v-form ref="form" lazy-validation>
      <applicant-info-form v-model="applicantInfo" @input="updateInfo"></applicant-info-form>
      <applicant-details-form v-model="applicantDetails"></applicant-details-form>
    </v-form>
  </div>
</template>

<script>
import ApplicantInfoForm from "./ApplicantInfoForm.vue";
import ApplicantDetailsForm from "./ApplicationDetailsForm.vue";

export default {
  created() {
    const formData = JSON.parse(localStorage.getItem("trJobApplication"));

    // apply local storage to forms (hacky because the full form is nested soo deeply)
    
  },
  methods: {
    updateInfo() {

   },

  },

  data() {
    return {
      applicantInfo: {},
      applicantDetails: {}
    };
  },
  components: {
    ApplicantInfoForm,
    ApplicantDetailsForm
  },
  beforeRouteLeave(to, from, next) {
    if (to.query.form === "advanced") {
      return next();
    }
    next(this.$refs.form.validate());
  }
};


</script>

<style>
</style>
