<template>
  <v-app>
    <app-header></app-header> 
    <router-view></router-view>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import Header from "../components/layout/Header.vue";
import Footer from "../components/layout/Footer.vue";

export default {
  components: {
    appHeader: Header,
    appFooter: Footer
  }
};
</script>

<style>
</style>
