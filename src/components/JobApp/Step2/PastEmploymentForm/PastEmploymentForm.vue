<template>
  <app-card>
    <h2 slot="title">Past Employment</h2>

    <past-employment
      v-for="(job, index) in value"
      :key="index"
      :employerNumber="index + 1"
      :class="{spaced: index !== value.length - 1}"
      v-model="value[index]"
      @input="updateForm"
    ></past-employment>

    <app-add-block-button @click="addJob">Add Another Job</app-add-block-button>

  </app-card>
</template>

<script>
import Card from "../../shared/Card.vue";
import AddBlockButton from "../../shared/AddBlockButton.vue";
import PastEmployment from "./PastEmployment.vue";

export default {
  props: {
    value: {
      required: true,
      type: Array
    }
  },
  created() {
    if (this.value.length < 1) this.addJob();
  },
  methods: {
    updateForm() {
      this.$emit('input', this.value);
    },
    addJob() {
      const tempValue = [...this.value, {}];
      this.$emit("input", tempValue);
    }
  },
  components: {
    appCard: Card,
    appAddBlockButton: AddBlockButton,
    PastEmployment
  }
};
</script>

<style scoped>
.spaced {
  margin-bottom: 30px;
}
</style>
