<template>
  <div>
    <v-form ref="form" lazy-validation>
      <applicant-info-form v-model="applicantInfo" @input="updateInfo"></applicant-info-form>
      <applicant-details-form v-model="applicantDetails" @input="updateInfo"></applicant-details-form>
    </v-form>
  </div>
</template>

<script>
import ApplicantInfoForm from "./ApplicantInfoForm.vue";
import ApplicantDetailsForm from "./ApplicationDetailsForm.vue";

export default {
  created() {
    // apply localStorage to data
    const formData = JSON.parse(localStorage.getItem("trJobApplication"));
    this.applyToApplicantInfo(formData);
    this.applyToApplicantDetails(formData);
  },
  methods: {
    updateInfo() {
      const formData = {...this.applicantDetails, ...this.applicantInfo };
      const currentData = JSON.parse(localStorage.getItem("trJobApplication"));

      const updatedData = currentData;
      updatedData.general.fields = {
        ...currentData.general.fields,
        ...formData
      };

      updatedData.general.fields.ableToWorkInUS = this.applicantInfo.availabilityType;

      localStorage.setItem("trJobApplication", JSON.stringify(updatedData));
    },
    applyToApplicantInfo(formData) {
      this.applicantInfo = {
        lastName: formData.general.fields.lastName,
        firstName: formData.general.fields.firstName,
        middleName: formData.general.fields.middleName,
        address: formData.general.fields.address,
        city: formData.general.fields.city,
        state: formData.general.fields.state,
        zipCode: formData.general.fields.zipCode,
        primaryPhone: formData.general.fields.primaryPhone,
        emailAddress: formData.general.fields.emailAddress,
        ableToWorkInUS: formData.general.fields.isEmploymentPrevented
      };
    },
    applyToApplicantDetails(formData) {
      this.applicantDetails = {
        applicationDate: formData.general.fields.applicationDate,
        positionAppliedFor: formData.general.fields.positions,
        dateAvailable: formData.general.fields.dateAvailable,
        desiredSalary: formData.general.fields.desiredSalary,
        availabilityType: formData.general.fields.availabilityType
      };
    }
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
