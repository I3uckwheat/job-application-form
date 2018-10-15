<template>
  <app-card>
    <h2 slot="title">References</h2>
    <reference-form v-for="n in 3" :key="n" :index="n"></reference-form>
  </app-card>
</template>

<script>
import Card from "../../shared/Card.vue";
import ReferenceForm from "./ReferenceForm.vue";

export default {
  components: {
    ReferenceForm: ReferenceForm,
    appCard: Card
  }
};
</script>

<style>
</style>
