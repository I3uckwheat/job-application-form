<template>
<v-form>
  <h3>Reference {{ index }}</h3>

  <v-layout row wrap justify-space-between>

    <v-flex xs12 sm6>
      <v-text-field
        @blur="updateForm"
        label="Name"
        v-model="value.name">
      </v-text-field>
    </v-flex>

    <v-flex xs12 sm6>
      <v-text-field
        @blur="updateForm"
        label="Phone Number"
        mask="phone"
        prepend-icon="phone"
        v-model="value.phone">
      </v-text-field>
    </v-flex>

    <v-flex xs12 sm12>
      <v-text-field
        @blur="updateForm"
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
  },
  methods: {
    updateForm() {
      this.$emit('input', this.value);
    }
  }
};
</script>

<style>
</style>
