<template>
  <app-card>
    <h2 slot="title">Application Details</h2>

    <v-flex xs12 sm4>
      <app-date-dialog 
        label="Date of Application" 
        v-model="applicationDate"
      ></app-date-dialog>
    </v-flex>

    <v-flex xs12 sm4>
      <v-text-field
        label="Position Applied For">
      </v-text-field>
    </v-flex>

    <v-flex xs12 sm4>
      <app-date-dialog 
        label="Date Available for Work" 
        v-model="dateAvailable"
      ></app-date-dialog>
    </v-flex>

    <v-flex xs12 sm4>
      <v-text-field
        label="Desired Salary Range">
      </v-text-field>
    </v-flex>

  </app-card>
</template>

<script>
import Card from "../shared/Card.vue";
import DateDialog from "../shared/DateDialog.vue";

export default {
  data() {
    return {
      applicationDate: '',
      dateAvailable: ''
    }
  },
  components: {
    appCard: Card,
    appDateDialog: DateDialog
  }
};
</script>

<style>
</style>
