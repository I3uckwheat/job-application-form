<template>
  <v-flex xs12 text-xs-center>
    <v-btn
      @click="$emit('click')"
      dark
      color="pink">
      <v-icon left>add</v-icon>
      <span><slot></slot></span>
    </v-btn>
  </v-flex>
</template>

<script>
export default {};
</script>

<style>
</style>
