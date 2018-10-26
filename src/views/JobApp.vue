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

// Workaround for getting needed data. this is wrong, don't do this
import { state } from "../store/modules/job-application-form-data/state-getters";

export default {
  created() {
    this.setupLocalStorage();

    if (this.$route.query.form === "advanced") {
      this.$router.push({
        path: "/job-application/general",
        query: { form: "advanced" }
      });
    } else {
      this.$router.push("/job-application/step1");
    }
  },
  methods: {
    setupLocalStorage() {
      const timeStamp = localStorage.getItem("trJobApplicationTimestamp");
      const jobApp = JSON.parse(localStorage.getItem("trJobApplication"));

      // If timestamp is expired
      if (this.jobAppIsExpired(timeStamp)) {
        // delete job-app localStorage
        localStorage.clear();

        // set a new timestamp
        localStorage.setItem(
          "trJobApplicationTimestamp",
          Math.floor(Date.now() / 1000)
        );
      }

      if (!jobApp) {
        localStorage.setItem("trJobApplication", JSON.stringify(state));
      }
    },
    jobAppIsExpired(timeStamp) {
      // See FullJobApp/job-application/JobApplication.vue
      const now = Date.now() / 100;
      const expiring = timeStamp + 259200;
      return now > expiring;
    }
  },
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
