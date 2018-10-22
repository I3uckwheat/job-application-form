<template>
  <v-app>    
    
    <template v-if="$route.query.form === 'advanced'">
      <full-job-app></full-job-app>
    </template>

    <template v-else>
      <app-header></app-header> 
      <app-job-nav class="mx-3 my-2">
        <router-view></router-view>
      </app-job-nav>  
      <app-footer></app-footer>
    </template>



  </v-app>
</template>

<script>
import Header from "../components/layout/Header.vue";
import Footer from "../components/layout/Footer.vue";
import JobNav from "../components/JobApp/JobNav/JobNav.vue";

import FullJobApp from "../components/FullJobApp/job-application/JobApplication.vue";

export default {
  components: {
    appHeader: Header,
    appFooter: Footer,
    appJobNav: JobNav,
    FullJobApp
  }
};
</script>

<style>
</style>
