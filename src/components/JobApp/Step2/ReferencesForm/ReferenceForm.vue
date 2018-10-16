<template>
<v-form>
  <h3>Reference {{ index }}</h3>

  <v-layout row wrap justify-space-between>

    <v-flex xs12 sm6>
      <v-text-field
        label="Name"
        v-model="name">
      </v-text-field>
    </v-flex>

    <v-flex xs12 sm6>
      <v-text-field
        label="Phone Number"
        mask="phone"
        prepend-icon="phone"
        v-model="phoneNumber">
      </v-text-field>
    </v-flex>

    <v-flex xs12 sm12>
      <v-text-field
        label="Address"
        v-model="address">
      </v-text-field>
    </v-flex>

  </v-layout>
</v-form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      phoneNumber: "",
      address: ""
    };
  },
  props: {
    index: Number
  }
};
</script>

<style>
</style>
