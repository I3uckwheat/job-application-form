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
    >
      <delete-button v-if="index !== 0" @click="removeJob(index)">
    </delete-button></past-employment>

    <app-add-block-button @click="addJob">Add Another Job</app-add-block-button>

  </app-card>
</template>

<script>
import Card from "../../shared/Card.vue";
import AddBlockButton from "../../shared/AddBlockButton.vue";
import PastEmployment from "./PastEmployment.vue";
import DeleteButton from "../../../layout/DeleteButton.vue";

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
    },
    removeJob(index) {
      const tempValue = this.value;
      tempValue.splice(index, 1);
      this.$emit("input", tempValue);
    }
  },
  components: {
    PastEmployment,
    DeleteButton,
    appCard: Card,
    appAddBlockButton: AddBlockButton,
  }
};
</script>

<style scoped>
.spaced {
  margin-bottom: 30px;
}
</style>
