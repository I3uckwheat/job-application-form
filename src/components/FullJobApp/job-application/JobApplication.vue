<template>
  <main>
    <v-content>
      <v-container fluid grid-list-lg>
        <job-application-header class="mb-3"></job-application-header>

        <!-- Steps/Forms -->
        <bidirectional-stepper
            v-if="!applicationCompleted"
            :config="this.$store.state.jobApplicationStepperConfig"
            :model="this.$store.state.jobApplicationFormData"
            :service="jobApplicationService"
            next-label="Continue"
            previous-label="Back"
            submit-label="Submit Application"
            cancel-label="Cancel Application &amp; Clear Data"
            @stepper-completed="this.onApplicationSuccess"
            @stepper-canceled="this.onApplicationCanceled"
            ref="BidirectionalStepper"
            class="mb-3">
        </bidirectional-stepper>

        <!-- Application Success Message -->
        <v-card v-if="applicationCompleted">
          <v-alert
              class='ja-submitted-message'
              color="success"
              icon="check_circle"
              transition="scale-transition"
              v-model="alerts.applicationSubmitSuccess">
            Your application has been received. Thank you.
          </v-alert>
        </v-card>

        <job-application-footer></job-application-footer>
      </v-container>
    </v-content>

    <!-- trigger computed property updates with hidden element -->
    <div v-show="false">{{ setStoreInLocalStorage }}</div>
  </main>
</template>

<script>
import JobApplicationsService from "../../../services/JobApplicationsService";

export default {
  name: "job-application",

  /**
   * Components
   * lazy load for local use
   */
  components: {
    JobApplicationHeader: () =>
      import("../job-application-header/JobApplicationHeader"),
    BidirectionalStepper: () =>
      import("../bidirectional-stepper/BidirectionalStepper"),
    JobApplicationFooter: () =>
      import("../job-application-footer/JobApplicationFooter")
  },

  /**
   * Data Properties
   */
  data() {
    return {
      alerts: {
        applicationSubmitSuccess: true
      },
      attemptedLocalStorageLoad: false,
      jobApplicationService: JobApplicationsService,
      applicationCompleted: false,
      firstValidationCheck: false
    };
  },

  /**
   * Computed Properties
   */
  computed: {
    // sync form data store state with localStorage
  },

  /**
   * Methods
   */
  methods: {
    setStoreInLocalStorage() {
      // don't overwrite local storage until the attempt to load it in has finished
      if (this.attemptedLocalStorageLoad) {
        localStorage.trJobApplication = JSON.stringify(
          this.$store.state.jobApplicationFormData
        );

        if (!this.firstValidationCheck) {
          setTimeout(() => {
            this.$refs.BidirectionalStepper.getFirstInvalidStep();
          }, 2500);
          this.firstValidationCheck = true;
        }
      }
    },
    onApplicationSuccess() {
      this.applicationCompleted = true;
      // send notification to staff indicating an application is awaiting review
      JobApplicationsService.createNotification();

      delete localStorage.trJobApplication;
      delete localStorage.trJobApplicationTimestamp;
    },

    onApplicationCanceled() {
      delete localStorage.trJobApplication;
      delete localStorage.trJobApplicationTimestamp;
      window.location.href = "https://www.t-r.com";
    },

    getStoreFromDatabase() {
      // Security is handled through the parent window
      // when this is inside an IFRAME.
      // At present it's the only way loading an existing
      // job app is supported (for security reasons)
      const jobAppIframe = window.top.document.querySelector("#JobAppIFrame");

      if (jobAppIframe === null) {
        return false;
      }

      const jobAppSecurityToken = jobAppIframe.getAttribute("token");

      if (jobAppSecurityToken === null || jobAppSecurityToken === "") {
        return false;
      }

      JobApplicationsService.get(
        this.$route.query.id,
        jobAppSecurityToken
      ).then(result => {
        if (
          typeof result.data === "undefined" ||
          typeof result.data.JSON === "undefined"
        ) {
          this.$swal(
            "Error",
            `Application #${this.$route.query.id} could not be loaded`,
            "error"
          );

          return false;
        }

        this.$store.state.jobApplicationFormData = JSON.parse(result.data.JSON);

        // give Vue a little time to propagate the new data then validate it
        setTimeout(() => {
          this.$refs.BidirectionalStepper.getFirstInvalidStep();
        }, 1000);

        return true;
      });

      return true;
    },

    // restore form data state from localStorage
    getStoreFromLocalStorage() {
      try {
        /**
         * Check data expiration timestamp
         *   - delete if expired
         *   - set expiration timestamp if it doesn't exist
         */
        if (typeof localStorage.trJobApplicationTimestamp !== "undefined") {
          const currentTimestamp = Math.floor(Date.now() / 1000);
          const expirationTimestamp = parseInt(
            localStorage.trJobApplicationTimestamp,
            10
          );

          // data expired: only keep data for 3 days
          if (currentTimestamp > expirationTimestamp + 259200) {
            delete localStorage.trJobApplication;
            delete localStorage.trJobApplicationTimestamp;

            //  create fresh timestamp since old was expired
            localStorage.trJobApplicationTimestamp = Math.floor(
              Date.now() / 1000
            );
          }
        } else {
          // set expiration timestamp if it doesn't exist
          localStorage.trJobApplicationTimestamp = Math.floor(
            Date.now() / 1000
          );
        }

        /**
         * Recover form data from localStorage if:
         *   - not expired
         *   - it exists
         *   - it's a valid object
         */
        if (typeof localStorage.trJobApplication !== "undefined") {
          const jobApplicationFormData = JSON.parse(
            localStorage.trJobApplication
          );

          if (typeof jobApplicationFormData.general !== "undefined") {
            this.$store.state.jobApplicationFormData = jobApplicationFormData;
          }
        }
      } catch (e) {
        // clean up expired or corrupted data
        delete localStorage.trJobApplication;
        delete localStorage.trJobApplicationTimestamp;
      }

      this.attemptedLocalStorageLoad = true;
    }
  },

  /**
   * Lifecycle Hooks
   */
  created() {
    /**
     * load-in existing application
     *  - database: bring up a submitted application for viewing
     *  - localStorage: resume a partially completed application
     */
    if (typeof this.$route.query.id !== "undefined") {
      this.getStoreFromDatabase();
    } else {
      this.getStoreFromLocalStorage();
    }
  }
};
</script>

<style>
.ja-submitted-message {
  font-size: 150%;
  margin-bottom: 15px;
}
</style>
