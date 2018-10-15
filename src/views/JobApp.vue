<template>
  <v-app>
    <app-header></app-header> 
    <app-job-nav class="mx-3 my-2">
      <router-view></router-view>
    </app-job-nav>  
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
    appJobNav: JobNav
  }
};
</script>

<style>
</style>
