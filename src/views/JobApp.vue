<template>
  <v-app>
    <app-header></app-header> 
      <app-job-nav></app-job-nav>  
      <router-view></router-view>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import Header from "../components/layout/Header.vue";
import Footer from "../components/layout/Footer.vue";
import JobNav from "../components/JobApp/JobNav/JobNav.vue";

export default {
  components: {
    appHeader: Header,
    appFooter: Footer,
    appJobNav: JobNav,
  }
};
</script>

<style>
</style>
