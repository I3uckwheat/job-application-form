<template>
  <app-card>
    <h2 slot="title">References</h2>
    <reference-form v-for="n in renderAmount" :key="n" :index="n" v-model="value[n - 1]" @input="updateForm"></reference-form>
  </app-card>
</template>

<script>
import Card from "../../shared/Card.vue";
import ReferenceForm from "./ReferenceForm.vue";

export default {
  data() {
    return {
      renderAmount: null
    };
  },
  props: {
    value: {
      type: [Array, Object],
      required: true
    },
    amount: [Number, String]
  },

  // TODO - make mixin
  created() {
    // Turn into a Number if not
    this.renderAmount = Number(this.amount);

    // Initialize empty objects if !exists
    for (let i = 0; i < this.renderAmount; i++) {
      this.value[i] = this.value[i] || {};
    }
  },
  methods: {
    updateForm() {
      this.$emit("input", this.value);
    }
  },
  components: {
    ReferenceForm: ReferenceForm,
    appCard: Card
  }
};
</script>

<style>
</style>
