<template>
<v-form>
  <h3>Reference {{ index }}</h3>

  <v-layout row wrap justify-space-between>

    <v-flex xs12 sm6>
      <v-text-field
        label="Name"
        v-model="value.name">
      </v-text-field>
    </v-flex>

    <v-flex xs12 sm6>
      <v-text-field
        label="Phone Number"
        mask="phone"
        prepend-icon="phone"
        v-model="value.phoneNumber">
      </v-text-field>
    </v-flex>

    <v-flex xs12 sm12>
      <v-text-field
        label="Address"
        v-model="value.address">
      </v-text-field>
    </v-flex>

  </v-layout>
</v-form>
</template>

<script>
export default {
  props: {
    index: Number,
    value: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
</style>
