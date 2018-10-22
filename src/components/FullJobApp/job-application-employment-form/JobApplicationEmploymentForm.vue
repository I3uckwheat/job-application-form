<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-alert
        class='jae-instructions-message'
        color="info"
        icon="info"
        v-model="instructionsMessageState">
      {{ instructionsMessage }}
    </v-alert>

    <!-- 1st to nth Block: Prior Employment Experience -->
    <template v-for="(job, index) in model.employment.fields.jobs">

      <v-layout row wrap>
        <v-flex>
          <v-card class="mx-1 my-2 elevation-5">
            <v-toolbar class="grey lighten-3" flat>
              <v-toolbar-title>Past Employment #{{ index + 1 }}</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn
                  v-if="index !== 0"
                  @click="removePastEmployer(index)"
                  class="remove-past-employer"
                  large
                  icon>
                <v-icon>delete</v-icon>
              </v-btn>
            </v-toolbar>

            <v-card-text>
              <!-- Row 1 -->
              <v-layout row wrap>
                <!-- Column 1: Past Employment Name -->
                <v-flex xs12 md4>
                  <v-text-field
                      v-model="job.employer"
                      label="Employer"
                      :rules="[rules.required, rules.max(60)]"
                      :autofocus="(index === 0 || index > 2) && !readOnly"
                      :readonly="readOnly"
                      :clearable="!readOnly"
                      required>
                  </v-text-field>
                </v-flex>

                <!-- Column 2: Past Employment Address -->
                <v-flex xs12 md4>
                  <v-text-field
                      v-model="job.address"
                      label="Address"
                      :rules="[rules.max(120)]"
                      :readonly="readOnly"
                      :clearable="!readOnly">
                  </v-text-field>
                </v-flex>

                <!-- Column 3: Past Employment Phone Number -->
                <v-flex xs12 md4>
                  <v-text-field
                      v-model="job.telephone"
                      label="Phone Number"
                      :rules="[rules.required, rules.digits(10)]"
                      :readonly="readOnly"
                      mask="phone"
                      prepend-icon="phone"
                      min="10"
                      max="10"
                      :clearable="!readOnly"
                      required>
                  </v-text-field>
                </v-flex>
              </v-layout>

              <!-- Row 2 -->
              <v-layout row wrap>
                <!-- Column 1: Past Employment Job Title -->
                <v-flex xs12 md4>
                  <v-text-field
                      v-model="job.jobTitle"
                      label="Job Title"
                      :rules="[rules.max(60)]"
                      :readonly="readOnly"
                      :clearable="!readOnly">
                  </v-text-field>
                </v-flex>

                <!-- Column 2: Past Employment Supervisor -->
                <v-flex xs12 md4>
                  <v-text-field
                      v-model="job.supervisor"
                      label="Supervisor"
                      :rules="[rules.max(60)]"
                      :readonly="readOnly"
                      :clearable="!readOnly">
                  </v-text-field>
                </v-flex>

                <!-- Column 3: Past Employment Reason For Leaving -->
                <v-flex xs12 md4>
                  <v-text-field
                      v-model="job.reasonForLeaving"
                      label="Reason for Leaving"
                      :rules="[rules.max(60)]"
                      :readonly="readOnly"
                      :clearable="!readOnly">
                  </v-text-field>
                </v-flex>
              </v-layout>

              <!-- Row 3 -->
              <v-layout row wrap>
                <v-flex xs12 sm6>
                  <!-- Column 1: Past Employment Dates Employed Start Picker -->
                  <v-dialog
                      v-model="modals.datesEmployed[index].start"
                      lazy
                      :disabled="readOnly"
                      full-width>
                    <v-text-field
                        slot="activator"
                        label="Dates Employed (Start)"
                        v-model="job.datesEmployedStart"
                        prepend-icon="event"
                        :rules="[rules.required]"
                        readonly
                        required>
                    </v-text-field>
                    <v-date-picker
                        type="month"
                        v-model="job.datesEmployedStart"
                        scrollable
                        actions>
                      <template slot-scope="{ save, cancel }">
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn flat color="secondary" @click="cancel">Cancel</v-btn>
                          <v-btn flat color="primary" @click="save">OK</v-btn>
                        </v-card-actions>
                      </template>
                    </v-date-picker>
                  </v-dialog>
                </v-flex>

                <v-flex xs12 sm6>
                  <!-- Column 2: Past Employment Dates Employed End Picker -->
                  <v-dialog
                      v-model="modals.datesEmployed[index].end"
                      lazy
                      :disabled="readOnly"
                      full-width>
                    <v-text-field
                        slot="activator"
                        label="Dates Employed (End)"
                        v-model="job.datesEmployedEnd"
                        prepend-icon="event"
                        :rules="[rules.required]"
                        readonly
                        required>
                    </v-text-field>
                    <v-date-picker
                        type="month"
                        v-model="job.datesEmployedEnd"
                        scrollable
                        actions>
                      <template slot-scope="{ save, cancel }">
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn flat color="secondary" @click="cancel">Cancel</v-btn>
                          <v-btn flat color="primary" @click="save">OK</v-btn>
                        </v-card-actions>
                      </template>
                    </v-date-picker>
                  </v-dialog>
                </v-flex>
              </v-layout>

              <!-- Row 4 -->
              <v-layout row wrap>
                <!-- Column 1: Past Employment Hourly Rate Starting -->
                <v-flex xs12 sm6>
                  <v-text-field
                      v-model="job.hourlyRateStarting"
                      label="Hourly Rate/Salary (Starting)"
                      :rules="[rules.numeric, rules.max(12)]"
                      :readonly="readOnly"
                      prefix="$"
                      :clearable="!readOnly">
                  </v-text-field>
                </v-flex>

                <!-- Column 2: Past Employment Hourly Rate Starting -->
                <v-flex xs12 sm6>
                  <v-text-field
                      v-model="job.hourlyRateFinal"
                      label="Hourly Rate/Salary (Final)"
                      :rules="[rules.numeric, rules.max(12)]"
                      :readonly="readOnly"
                      prefix="$"
                      :clearable="!readOnly">
                  </v-text-field>
                </v-flex>
              </v-layout>

              <!-- Row 5 -->
              <v-layout row wrap>
                <!-- Column 1: Past Employment Work Performed -->
                <v-flex xs12>
                  <v-text-field
                      v-model="job.workPerformed"
                      label="Work Performed"
                      :counter="1000"
                      :rules="[rules.max(1000)]"
                      :readonly="readOnly"
                      multi-line
                      auto-grow>
                  </v-text-field>
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </template>

    <!-- nth + 1 Block -->
    <v-layout row wrap v-if="isBelowMaxJobs()">
      <v-flex xs12 text-xs-center>
        <v-btn
            @click="addPastEmployer"
            class="add-past-employer"
            large
            :disabled="readOnly"
            color="pink">
          <v-icon left>add</v-icon>
          <span>Add Another Past Employer</span>
        </v-btn>
      </v-flex>
    </v-layout>

    <!-- nth + 2 Block -->
    <v-layout row wrap>
      <v-flex>
        <v-card class="mx-1 my-2 elevation-5">
          <v-card-text>
            <!-- Row 1 -->
            <v-layout row wrap>
              <!-- Column 1: Training, Skills and Activities -->
              <v-flex xs12>
                <v-text-field
                    v-model="model.employment.fields.activitiesAndOffice"
                    label="List professional, trade, business or civic activities and offices held."
                    :counter="1000"
                    :rules="[rules.max(1000)]"
                    :hint="activitiesAndOfficeHint"
                    :readonly="readOnly"
                    persistent-hint
                    multi-line
                    auto-grow>
                </v-text-field>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

  </v-form>
</template>

<script>
export default {
  name: "job-application-employment-form",

  /**
   * Props
   */
  props: {
    model: {
      type: Object,
      required: true
    },

    readOnly: {
      type: Boolean,
      required: false
    }
  },

  /**
   * Data Properties
   */
  data() {
    return {
      valid: true,
      rules: this.$store.state.vuetifyRules,

      modals: {
        datesEmployed: []
      },

      instructionsMessage:
        "Start with your present or last job. Include any job-related military " +
        "service assignments and volunteer activities. You may exclude organizations which indicate " +
        "race, color, religion, gender, national origin, disabilities or other protected status.",
      instructionsMessageState: true,
      activitiesAndOfficeHint:
        "You may exclude membership which would reveal gender, race, " +
        "religion, national origin, age, ancestry, disability or other protected status."
    };
  },

  /**
   * Methods
   */
  methods: {
    addPastEmployer() {
      this.model.employment.fields.jobs.push({
        employer: null,
        address: null,
        telephone: null,
        jobTitle: null,
        supervisor: null,
        reasonForLeaving: null,
        datesEmployedStart: null,
        datesEmployedEnd: null,
        hourlyRateStarting: null,
        hourlyRateFinal: null,
        workPerformed: null
      });

      this.modals.datesEmployed.push({
        start: false,
        end: false
      });
    },

    removePastEmployer(index) {
      this.$swal({
        title: "Are you sure you want to delete this employer?",
        text: "You won't be able to revert this.",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it."
      }).then(result => {
        if (result.value) {
          this.model.employment.fields.jobs.splice(index, 1);
          this.modals.datesEmployed.splice(index, 1);
        }
      });
    },

    isBelowMaxJobs() {
      return this.model.employment.fields.jobs.length < 10;
    }
  },

  /**
   * Lifecycle Hooks
   */
  created() {
    // sync up job modals with # of jobs
    this.model.employment.fields.jobs.forEach(() => {
      this.modals.datesEmployed.push({
        start: false,
        end: false
      });
    });
  }
};
</script>



<style scoped>
.jae-instructions-message {
  font-size: 120%;
}

.add-past-employer {
  color: white;
}

.add-past-employer span {
  font-variant: small-caps;
}
</style>
