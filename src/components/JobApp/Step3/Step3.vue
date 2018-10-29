<template>
  <div class="agreement-container">
    <v-flex xs12>
      <applicant-agreement></applicant-agreement>
    </v-flex>

    <v-layout class="mx-4">
      <v-flex xs8 class="my-3">
        <v-text-field
          v-model="signature"
          label="Signature of Applicant"
          hint="Typing your name counts as your legal signature."
          persistent-hint
        >
        </v-text-field>
      </v-flex>

      <v-flex xs4 class="my-2">
        <app-date-dialog
          label="Date of Signature"
          v-model="date"  
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
      signature: "",
      date: ""
    };
  },
  components: {
    ApplicantAgreement,
    appDateDialog: DateDialog
  },
  created() {
    const formData = JSON.parse(localStorage.getItem('trJobApplication'));

    this.signature = formData.statement.fields.signature;
    this.date = formData.statement.fields.date;
  },
};
</script>

<style scoped>
.agreement-container {
  padding-bottom: 10px;
}
</style>
