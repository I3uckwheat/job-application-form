<template>
  <app-card>
    <h2 slot="title">Application Details</h2>

    <v-flex xs12 sm4>
      <v-text-field
        label="Date of Application">
      </v-text-field>
    </v-flex>

    <v-flex xs12 sm4>
      <v-text-field
        label="Position Applied For">
      </v-text-field>
    </v-flex>

    <v-flex xs12 sm4>
      <v-text-field
        label="Date Available for Work">
      </v-text-field>
    </v-flex>

    <v-flex xs12 sm4>
      <v-text-field
        label="Desired monies range">
      </v-text-field>
    </v-flex>

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
