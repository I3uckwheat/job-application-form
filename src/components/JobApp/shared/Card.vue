<template>
  <v-layout row wrap>
    <v-flex>
      <v-card class="mx-4 my-4">

        <v-toolbar class="grey lighten-3">
          <v-toolbar-title><slot name="title"></slot></v-toolbar-title>
        </v-toolbar>

        <v-card-text class="elevation-2">
          <slot></slot>
        </v-card-text>

      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {};
</script>

<style>
</style>
