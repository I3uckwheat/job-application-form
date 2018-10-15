<template>
  <app-card>
    <h2 slot="title">Past Employment</h2>

    <template v-for="(job, index) in jobs">
      <div :key="index" :class="{spaced: index !== jobs.length - 1}" class="layout-wrapper">
        <h3>Employer {{ index + 1 }}</h3>
        <v-layout row wrap justify-space-between> 

          <!-- Top row -->
          <v-flex xs12 sm4>
            <v-text-field
              label="Employer"
              v-model="jobs[index].employer">
            </v-text-field>
          </v-flex>

          <v-flex xs12 sm4>
            <v-text-field
              label="Address"
              v-model="jobs[index].address">
            </v-text-field>
          </v-flex>

          <v-flex xs12 sm4>
            <v-text-field
              label="Phone Number"
              v-model="jobs[index].phoneNumber">
            </v-text-field>
          </v-flex>

          <!-- Second Row -->
          <v-flex xs12 sm4>
            <v-text-field
              label="Job Title"
              v-model="jobs[index].title">
            </v-text-field>
          </v-flex>

          <v-flex xs12 sm4>
            <v-text-field
              label="Supervisor"
              v-model="jobs[index].supervisor">
            </v-text-field>
          </v-flex>

          <v-flex xs12 sm4>
            <v-text-field
              label="Reason for Leaving"
              v-model="jobs[index].leaveReason">
            </v-text-field>
          </v-flex>

          <!-- Third Row -->
          <v-flex xs6 sm6>
            <app-date-dialog
              label="Start Date"
              v-model="jobs[index].startDate"
            >
            </app-date-dialog>
          </v-flex>

          <v-flex xs6 sm6>
            <app-date-dialog
              label="End Date"
              v-model="jobs[index].endDate"
            >
            </app-date-dialog>
          </v-flex>

          <!-- Fourth Row -->
          <v-flex xs6 sm6>
            <v-text-field
              label="Starting Hourly Pay"
              v-model="jobs[index].startingHourly">
            </v-text-field>
          </v-flex>

          <v-flex xs6 sm6>
            <v-text-field
              label="Ending Hourly Pay"
              v-model="jobs[index].endingHourly">
            </v-text-field>
          </v-flex>

          <!-- Final Row -->
          <v-flex xs12 sm122>
            <v-textarea
              label="Work Peformed"
              v-model="jobs[index].workPeformed">
            </v-textarea>
          </v-flex>

        </v-layout>
      </div>
    </template>

    <app-add-block-button @click="addJob">Add Another Job</app-add-block-button>

  </app-card>
</template>

<script>
import Card from "../../shared/Card.vue";
import DateDialog from "../../shared/DateDialog.vue";
import AddBlockButton from "../../shared/AddBlockButton.vue";

export default {
  data() {
    return {
      jobs: []
    };
  },
  created() {
    this.addJob();
  },
  methods: {
    addJob() {
      this.jobs.push({
        employer: "",
        Address: "",
        phoneNumber: "",
        title: "",
        supervisor: "",
        leaveReason: "",
        startDate: "",
        endDate: "",
        startingHourly: "",
        endingHourly: "",
        workPeformed: ""
      });
    }
  },
  components: {
    appCard: Card,
    appAddBlockButton: AddBlockButton,
    appDateDialog: DateDialog
  }
};
</script>

<style scoped>
.spaced {
  margin-bottom: 30px;
}
</style>
