<template>
  <router-link :to="`/job-app/step${toStep}`">
    <v-btn color="info">Continue</v-btn> 
  </router-link>
</template>

<script>
export default {
  props: {
    toStep: {
      required: true
    }
  }
};
</script>

<style>
</style>
