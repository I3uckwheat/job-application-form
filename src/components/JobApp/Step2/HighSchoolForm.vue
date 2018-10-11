<template>
  <app-card>
    <h2 slot="title">High School</h2>
    <v-layout row wrap justify-space-between="">

      <!-- Row One -->
      <v-flex xs12 sm6>
        <v-text-field
          label="School Name">
        </v-text-field>
      </v-flex>

      <v-flex xs12 sm6>
        <v-text-field
          label="School Address">
        </v-text-field>
      </v-flex>

      <!-- Row Two -->
      <v-flex xs12 sm4>
        <v-text-field
          label="Area of Study">
        </v-text-field>
      </v-flex>

      <v-flex xs12 sm4>
        <v-text-field
          label="Years Completed">
        </v-text-field>
      </v-flex>

      <v-flex xs12 sm1>
        <v-text-field
          label="Diploma Checkbox">
        </v-text-field>
      </v-flex>
    </v-layout>

  </app-card>
</template>

<script>
import Card from "../shared/Card.vue";

export default {
  components: {
    appCard: Card
  }
};
</script>

<style>
</style>
