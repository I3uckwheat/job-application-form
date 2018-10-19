<template>
  <app-card>
    <h2 slot="title">Past Employment</h2>

    <past-employment
      v-for="(job, index) in jobs"
      :key="index"
      :employerNumber="index + 1"
      :class="{spaced: index !== jobs.length - 1}"
      v-model="jobs[index]"
    ></past-employment>

    <app-add-block-button @click="addJob">Add Another Job</app-add-block-button>

  </app-card>
</template>

<script>
import Card from "../../shared/Card.vue";
import AddBlockButton from "../../shared/AddBlockButton.vue";
import PastEmployment from "./PastEmployment.vue";

export default {
  data() {
    return {
      jobs: []
    };
  },
  created() {
    this.addJob();
  },
  methods: {
    addJob() {
      this.jobs.push({});
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
