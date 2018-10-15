<template>
  <div class="container">
    <v-flex xs12>
      <applicant-agreement></applicant-agreement>
    </v-flex>

    <v-layout class="mx-4">
      <v-flex xs8 class="my-2">
        <v-text-field
          v-model="applicantSignature"
          label="Signature of Applicant"
          hint="Typing your name counts as your legal signature."
          persistent-hint
        >
        </v-text-field>
      </v-flex>

      <v-flex xs4 class="my-2">
        <app-date-dialog
          label="Date of Signature"
          v-model="signatureDate"  
        ></app-date-dialog>
      </v-flex>
    </v-layout>

  </div>
</template>

<script>
import ApplicantAgreement from "./ApplicantAgreement/ApplicantAgreement.vue";
import DateDialog from "../shared/DateDialog.vue";

export default {
  data() {
    return {
      applicantSignature: "",
      signatureDate: ""
    };
  },
  components: {
    ApplicantAgreement,
    appDateDialog: DateDialog
  }
};
</script>

<style scoped>
.container {
  padding-bottom: 10px;
}
</style>
