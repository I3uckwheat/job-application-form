<template>
  <app-card>
    <h2 slot="title">Undergraduate College</h2>


    <undergrad-school
      v-for="(school, index) in value"
      :key="index"
      :schoolNumber="index + 1"
      :class="{spaced: index !== value.length - 1}"
      v-model="value[index]"
    ></undergrad-school>

    <app-add-block-button @click="addSchool">Add Another School</app-add-block-button>

  </app-card>
</template>

<script>
import Card from "../../shared/Card.vue";
import AddBlockButton from "../../shared/AddBlockButton.vue";
import UndergradSchool from "./UndergradSchool.vue";

export default {
  props: {
    value: {
      required: true,
      type: Array
    }
  },
  created() {
    this.addSchool();
  },
  methods: {
    addSchool() {
      const tempValue = [...this.value, {}];
      this.$emit('input', tempValue);
    }
  },
  components: {
    appCard: Card,
    appAddBlockButton: AddBlockButton,
    UndergradSchool
  }
};
</script>

<style scoped>
.spaced {
  margin-bottom: 30px;
}
</style>
