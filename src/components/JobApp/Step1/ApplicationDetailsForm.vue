<template>
  <app-card>
    <h2 slot="title">Application Details</h2>

    <v-flex xs12 sm4>
      <app-date-dialog 
        label="Date of Application" 
        @blur="updateForm"
        v-model="value.applicationDate"
        :rules="existsRule('Date of Application')"
        validate-on-blur
      ></app-date-dialog>
    </v-flex>

    <v-flex xs12 sm4>
      <v-text-field
        label="Position Applied For"
        @blur="updateForm"
        v-model="value.positions"
        :rules="existsRule('Position')"
        validate-on-blur
        >
      </v-text-field>
    </v-flex>

  <v-layout>
    <v-flex xs12 sm4>
      <app-date-dialog 
        label="Date Available for Work" 
        @input="updateForm"
        v-model="value.dateAvailable"
        :rules="existsRule('Date Available')"
        validate-on-blur
      ></app-date-dialog>
    </v-flex>

    <v-flex xs12 sm4>
      <v-text-field
        label="Desired Salary Range"
        @blur="updateForm"
        prefix="$"
        v-model="value.desiredSalary"
        validate-on-blur
        :rules="existsRule('Desired Salary')"
        >
      </v-text-field>
    </v-flex>
  </v-layout>

  <h4>Are you available to work:</h4>
  <v-layout justify-start>
    <v-flex xs2>
      <v-checkbox v-model="value.availabilityType" @change="updateForm" label="Full-Time" value="full-time"></v-checkbox>
    </v-flex>

    <v-flex xs2>
      <v-checkbox v-model="value.availabilityType" @change="updateForm" label="Part-Time" value="part-time"></v-checkbox>
    </v-flex>

    <v-flex xs2>
      <v-checkbox v-model="value.availabilityType" @change="updateForm" label="Temporary" value="temp"></v-checkbox>
    </v-flex>
  </v-layout>


  </app-card>
</template>

<script>
import Card from "../shared/Card.vue";
import DateDialog from "../shared/DateDialog.vue";

import validatorMixin from "../../../mixins/validatorMixin";

export default {
  props: {
    value: Object
  },
  methods: {
    updateForm() {
      this.$emit("input", this.value);
    }
  },
  components: {
    appCard: Card,
    appDateDialog: DateDialog
  },
  mixins: [validatorMixin]
};
</script>

<style>
</style>
