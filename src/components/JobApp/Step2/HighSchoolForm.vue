<template>
  <app-card>
    <h2 slot="title">High School</h2>
    <v-layout row wrap justify-space-between="">

      <!-- Row One -->
      <v-flex xs12 sm6>
        <v-text-field
          v-model="value.name"
          label="School Name">
        </v-text-field>
      </v-flex>

      <v-flex xs12 sm6>
        <v-text-field
          v-model="value.address"
          label="School Address">
        </v-text-field>
      </v-flex>

      <!-- Row Two -->
      <v-flex xs12 sm5>
        <v-text-field
          v-model="value.study"
          label="Area of Study">
        </v-text-field>
      </v-flex>

      <v-flex xs12 sm3>
        <v-text-field
          v-model="value.yearsCompleted"
          label="Years Completed">
        </v-text-field>
      </v-flex>

      <v-flex xs12 sm4>
        <v-text-field
          v-model="value.diploma"
          label="Diploma">
        </v-text-field>
      </v-flex>
    </v-layout>

  </app-card>
</template>

<script>
import Card from "../shared/Card.vue";

export default {
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  components: {
    appCard: Card
  }
};
</script>

<style>
</style>
