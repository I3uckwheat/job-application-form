<template>
  <v-btn @click="nextStep" color="info">Continue</v-btn> 
</template>

<script>
export default {
  methods: {
    nextStep() {
      const currentStep = Number(this.$route.name.slice(-1));
      this.$router.push(`step${currentStep + 1}`);
    }
  }
};
</script>

<style>
</style>
