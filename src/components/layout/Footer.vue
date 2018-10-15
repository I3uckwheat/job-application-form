<template>
  <footer>
    <div class="buttons">
      <back-button v-if="$route.name !== 'step1'"></back-button>
      <continue-button v-if="$route.name !== 'step3'"></continue-button>
      <finish-button v-else></finish-button>
    </div>
    <v-footer color="primary">
      <v-flex text-xs-center>
        <h6>We Are An Equal Opportunity Employer</h6>
      </v-flex>
    </v-footer>
  </footer>
</template>

<script>
import ContinueButton from "./ContinueButton.vue";
import BackButton from "./BackButton.vue";
import FinishButton from "./FinishButton.vue"

export default {
  components: {
    ContinueButton,
    BackButton,
    FinishButton
  },
  name: "job-application-footer",
  data() {
    return {};
  }
};
</script>

<style scoped>
h6 {
  margin: 10px;
  color: white;
  font-variant: small-caps;
}

.buttons {
  display: flex;
  justify-content: flex-end;
  margin: 10px;
}
</style>
