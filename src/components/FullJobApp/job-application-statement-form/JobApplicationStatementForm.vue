<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <!-- 1st Block -->
    <v-layout row wrap>
      <v-flex>
        <v-card class="mx-1 my-2 elevation-5">
          <v-toolbar class="grey lighten-3" flat>
            <v-toolbar-title>Applicant's Agreement</v-toolbar-title>
          </v-toolbar>

          <v-card-text>
            <!-- Row 1 -->
            <v-layout row wrap>
              <!-- Column 1: Applicant's Agreement -->
              <v-flex xs12>
                <p>I certify that answers given herein are true and complete.</p>

                <p>
                  I authorize investigation of all statements contained in this application
                  for employment as may be necessary in arriving at an employment decision.
                </p>

                <p>
                  This application for employment shall be considered active for a period of
                  time not to exceed 45 days. Any applicant wishing to be considered for employment
                  beyond this time period should inquire as to whether or not applications are being
                  accepted at that time.
                </p>

                <p>
                  I hereby understand and acknowledge that, unless otherwise defined by applicable
                  law, any employment relationship with this organization is of an "at will" nature,
                  which means that the Employee may resign at any time and the Employer may discharge
                  Employee at any time with or without cause. It is further understood that this "at
                  will" employment relationship may not be changed by any written document or by
                  conduct unless such change is specifically acknowledged in writing by an authorized
                  executive of this organization.
                </p>

                <p>
                  In the event of employment, I understand that false or misleading information given
                  in my application or interview(s) may result in discharge. In understand, also, that
                  I am required to abide by all rules and regulations of the employer.
                </p>
              </v-flex>
            </v-layout>

            <!-- Row 2 -->
            <v-layout row wrap>
              <!-- Column 1: Signature -->
              <v-flex xs12 md6>
                <v-text-field
                    v-model="model.statement.fields.signature"
                    label="Signature of Applicant"
                    :rules="[rules.required, rules.max(60)]"
                    hint="Typing your name counts as your legal signature."
                    persistent-hint
                    :readonly="readOnly"
                    :autofocus="!readOnly"
                    :clearable="!readOnly">
                </v-text-field>
              </v-flex>

              <!-- Column 2: Date -->
              <v-flex xs12 md6>
                <v-dialog
                    v-model="modals.todaysDate"
                    lazy
                    :disabled="readOnly"
                    full-width>
                  <v-text-field
                      slot="activator"
                      label="If Yes, give date"
                      v-model="model.statement.fields.date"
                      prepend-icon="event"
                      :rules="[rules.required]"
                      readonly
                      required>
                  </v-text-field>
                  <v-date-picker
                      v-model="model.statement.fields.date"
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
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

  </v-form>
</template>

<script>
  export default {
    name: 'job-application-statement-form',

    /**
     * Props
     */
    props: {
      model: {
        type: Object,
        required: true,
      },

      readOnly: {
        type: Boolean,
        required: false,
      },
    },

    /**
     * Data Properties
     */
    data() {
      return {
        valid: true,
        rules: this.$store.state.vuetifyRules,

        modals: {
          todaysDate: false,
        },
      };
    },

    /**
     * Methods
     */
    methods: {},

    /**
     * Lifecycle Hooks
     */
    created() {},
  };
</script>

<style scoped>
</style>
