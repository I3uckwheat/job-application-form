<template>
  <div>
    <h3>School {{ schoolNumber }}</h3>
    <v-layout row wrap justify-space-between> 
      <!-- Row One -->
      <v-flex xs12 sm6>
        <v-text-field
          label="School Name"
          v-model="value.name">
        </v-text-field>
      </v-flex>

      <v-flex xs12 sm6>
        <v-text-field
          label="School Address"
          v-model="value.address">
        </v-text-field>
      </v-flex>

      <!-- Row Two -->
      <v-flex xs12 sm5>
        <v-text-field
          label="Course of Study"
          v-model="value.study">
        </v-text-field>
      </v-flex>

      <v-flex xs12 sm3>
        <v-text-field
          label="Years Completed"
          v-model="value.years">
        </v-text-field>
      </v-flex>

      <v-flex xs12 sm4>
        <v-text-field
          label="Degree"
          v-model="value.degree">
        </v-text-field>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: {
    schoolNumber: {
      type: Number,
      required: true
    },
    value: {
      type: Object,
      required: true
    }
  }

}
</script>

<style>

</style>
