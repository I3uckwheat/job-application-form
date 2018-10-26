<template>
  <div>
    <h3 v-if="schoolNumber">School {{ schoolNumber }}</h3>
    <v-layout row wrap justify-space-between> 
      <!-- Row One -->
      <v-flex xs12 sm6>
        <v-text-field
          @blur="updateForm"
          label="School Name"
          v-model="value.schoolName">
        </v-text-field>
      </v-flex>

      <v-flex xs12 sm6>
        <v-text-field
          @blur="updateForm"
          label="School Address"
          v-model="value.schoolAddress">
        </v-text-field>
      </v-flex>

      <!-- Row Two -->
      <v-flex xs12 sm5>
        <v-text-field
          @blur="updateForm"
          label="Course of Study"
          v-model="value.courseOfStudy">
        </v-text-field>
      </v-flex>

      <v-flex xs12 sm3>
        <v-text-field
          @blur="updateForm"
          label="Years Completed"
          v-model="value.yearsCompleted">
        </v-text-field>
      </v-flex>

      <v-flex xs12 sm4>
        <v-text-field
          @blur="updateForm"
          label="Degree"
          v-model="value.degree">
        </v-text-field>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  methods: {
    updateForm() {
      this.$emit("input", this.value);
    }
  },
  props: {
    schoolNumber: {
      type: Number
    },
    value: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
</style>
