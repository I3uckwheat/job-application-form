<template>
  <div>
    <v-layout row justify-space-between>
      <h3>Employer {{ employerNumber }}</h3>
      <slot class="trash"></slot>
    </v-layout>

    <v-layout row wrap justify-space-between> 

      <!-- Top row -->
      <v-flex xs12 sm4>
        <v-text-field
          @blur="updateForm"
          label="Employer"
          v-model="value.employer">
        </v-text-field>
      </v-flex>

      <v-flex xs12 sm4>
        <v-text-field
          @blur="updateForm"
          label="Address"
          v-model="value.address">
        </v-text-field>
      </v-flex>

      <v-flex xs12 sm4>
        <v-text-field
          @blur="updateForm"
          label="Phone Number"
          prepend-icon="phone"
          mask="phone"
          v-model="value.phoneNumber">
        </v-text-field>
      </v-flex>

      <!-- Second Row -->
      <v-flex xs12 sm4>
        <v-text-field
          @blur="updateForm"
          label="Job Title"
          v-model="value.jobTitle">
        </v-text-field>
      </v-flex>

      <v-flex xs12 sm4>
        <v-text-field
          @blur="updateForm"
          label="Supervisor"
          v-model="value.supervisor">
        </v-text-field>
      </v-flex>

      <v-flex xs12 sm4>
        <v-text-field
          @blur="updateForm"
          label="Reason for Leaving"
          v-model="value.reasonForLeaving">
        </v-text-field>
      </v-flex>

      <!-- Third Row -->
      <v-flex xs6 sm6>
        <app-date-dialog
          @blur="updateForm"
          label="Start Date"
          v-model="value.startDate"
        >
        </app-date-dialog>
      </v-flex>

      <v-flex xs6 sm6>
        <app-date-dialog
          @blur="updateForm"
          label="End Date"
          v-model="value.endDate"
        >
        </app-date-dialog>
      </v-flex>

      <!-- Fourth Row -->
      <v-flex xs6 sm6>
        <v-text-field
          @blur="updateForm"
          label="Starting Hourly Pay"
          prefix="$"
          v-model="value.startingPay">
        </v-text-field>
      </v-flex>

      <v-flex xs6 sm6>
        <v-text-field
          @blur="updateForm"
          label="Ending Hourly Pay"
          prefix="$"
          v-model="value.endingPay">
        </v-text-field>
      </v-flex>

      <!-- Final Row -->
      <v-flex xs12 sm122>
        <v-textarea
          @blur="updateForm"
          label="Work Peformed"
          v-model="value.workPeformed">
        </v-textarea>
      </v-flex>

    </v-layout>
  </div>
</template>

<script>
import DateDialog from "../../shared/DateDialog.vue";

export default {
  props: {
    employerNumber: {
      required: true,
      type: Number
    },
    value: {
      required: true,
      type: Object
    }
  },
  methods: {
    updateForm() {
      this.$emit('input', this.value);
    },
  },
  components: {
    appDateDialog: DateDialog
  }
};
</script>

<style scoped>
.trash {
  float: right;
}
</style>
