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

  <v-layout>
    <v-flex xs12 sm4>
      <app-date-dialog 
        label="Date Available for Work" 
        v-model="dateAvailable"
      ></app-date-dialog>
    </v-flex>

    <v-flex xs12 sm4>
      <v-text-field
        label="Desired Salary Range"
        prefix="$">
      </v-text-field>
    </v-flex>
  </v-layout>

  <h4>Are you available to work:</h4>
  <v-layout justify-start>
    <v-flex xs2>
      <v-checkbox v-model="availability" label="Full-Time" value="full"></v-checkbox>
    </v-flex>

    <v-flex xs2>
      <v-checkbox v-model="availability" label="Part-Time" value="part"></v-checkbox>
    </v-flex>

    <v-flex xs2>
      <v-checkbox v-model="availability" label="Temporary" value="temp"></v-checkbox>
    </v-flex>
  </v-layout>


  </app-card>
</template>

<script>
import Card from "../shared/Card.vue";
import DateDialog from "../shared/DateDialog.vue";

export default {
  data() {
    return {
      applicationDate: "",
      dateAvailable: "",
      avilability: []
    };
  },
  components: {
    appCard: Card,
    appDateDialog: DateDialog
  }
};
</script>

<style>
</style>
