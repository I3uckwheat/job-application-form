<template>
  <app-card>
    <h2 slot="title">Applicant Information</h2>
    <v-layout row wrap justify-space-between="">

      <!-- Row One -->
      <v-flex xs12 sm4>
        <v-text-field
          label="Last Name">
        </v-text-field>
      </v-flex>

      <v-flex xs12 sm4>
        <v-text-field
          label="First Name">
        </v-text-field>
      </v-flex>

      <v-flex xs12 sm4>
        <v-text-field
          label="Middle Name">
        </v-text-field>
      </v-flex>

      <!-- Row Two -->
      <v-flex xs12 sm4>
        <v-text-field
          label="Address">
        </v-text-field>
      </v-flex>

      <v-flex xs12 sm3>
        <v-text-field
          label="City">
        </v-text-field>
      </v-flex>

      <v-flex xs12 sm2>
        <v-text-field
          label="State">
        </v-text-field>
      </v-flex>

      <v-flex xs12 sm2>
        <v-text-field
          label="Zip Code">
        </v-text-field>
      </v-flex>

      <!-- Row Three -->
      <v-flex xs12 sm6>
        <v-layout row wrap justify-space-between>
          
          <v-flex xs12 sm5>
            <v-text-field
              label="Phone Number">
            </v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              label="Email Address">
            </v-text-field>
          </v-flex>

        </v-layout>
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
