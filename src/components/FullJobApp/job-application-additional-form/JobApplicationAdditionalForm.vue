<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <!-- 1st Block -->
    <v-layout row wrap>
      <v-flex>
        <v-card class="mx-1 my-2 elevation-5">
          <v-toolbar class="grey lighten-3" flat>
            <v-toolbar-title>Other Qualifications</v-toolbar-title>
          </v-toolbar>

          <v-card-text>
            <!-- Row 1 -->
            <v-layout row wrap>
              <!-- Column 1: Other Qualifications -->
              <v-flex xs12>
                <v-textarea
                    v-model="model.additional.fields.otherQualifications"
                    :label="otherQualificationsLabel"
                    :counter="1000"
                    :rules="[rules.max(1000)]"
                    :readonly="readOnly"
                    auto-grow
                    :autofocus="!readOnly">
                </v-textarea>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <!-- 2nd Block -->
    <v-layout row wrap>
      <v-flex>
        <v-card class="mx-1 my-2 elevation-5">
          <v-toolbar class="grey lighten-3" flat>
            <v-toolbar-title>Specialized Skills</v-toolbar-title>
          </v-toolbar>

          <v-card-text>
            <!-- Row 1 -->
            <v-layout row wrap>
              <!-- Column 1: Office Skills pt. 1 -->
              <v-flex xs12 md6>
                <v-checkbox
                    v-model="model.additional.fields.officeSkills"
                    label="Terminal"
                    :disabled="readOnly"
                    value="Terminal">
                </v-checkbox>
                <v-checkbox
                    v-model="model.additional.fields.officeSkills"
                    label="PC/MAC"
                    :disabled="readOnly"
                    value="PC/MAC">
                </v-checkbox>
                <v-checkbox
                    v-model="model.additional.fields.officeSkills"
                    label="Typewriter"
                    :disabled="readOnly"
                    value="Typewriter">
                </v-checkbox>
                <v-text-field
                    v-if="hasOfficeSkill('Typewriter')"
                    v-model="model.additional.fields.typewriterWpm"
                    label="WPM"
                    :rules="[rules.numeric, rules.max(3)]"
                    :autofocus="!readOnly"
                    :readonly="readOnly">
                </v-text-field>
              </v-flex>

              <!-- Column 2: Office Skills pt. 2 -->
              <v-flex xs12 md6>
                <v-checkbox
                    v-model="model.additional.fields.officeSkills"
                    label="Spreadsheet"
                    :disabled="readOnly"
                    value="Spreadsheet">
                </v-checkbox>
                <v-checkbox
                    v-model="model.additional.fields.officeSkills"
                    label="Word Processing"
                    :disabled="readOnly"
                    value="Word Processing">
                </v-checkbox>
                <v-checkbox
                    v-model="model.additional.fields.officeSkills"
                    label="Shorthand"
                    :disabled="readOnly"
                    value="Shorthand">
                </v-checkbox>
                <v-text-field
                    v-if="hasOfficeSkill('Shorthand')"
                    v-model="model.additional.fields.shorthandWpm"
                    label="WPM"
                    :rules="[rules.numeric, rules.max(3)]"
                    :autofocus="!readOnly"
                    :readonly="readOnly">
                </v-text-field>
              </v-flex>
            </v-layout>

            <!-- Row 2 -->
            <v-layout row wrap>
              <!-- Column 1: Machinery List -->
              <v-flex xs12>
                <v-select
                    v-model="model.additional.fields.machineryList"
                    label="Production/Mobile Machinery (list)"
                    hint="Hit the enter key after typing each skill"
                    persistent-hint
                    chips
                    :disabled="readOnly"
                    tags>
                </v-select>
              </v-flex>
            </v-layout>

            <!-- Row 3 -->
            <v-layout row wrap>
              <!-- Column 1: Other List -->
              <v-flex xs12>
                <v-select
                    v-model="model.additional.fields.otherList"
                    label="Other (list)"
                    hint="Hit the enter key after typing each skill"
                    persistent-hint
                    chips
                    :disabled="readOnly"
                    tags>
                </v-select>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <!-- 3rd Block -->
    <v-layout row wrap>
      <v-flex>
        <v-card class="mx-1 my-2 elevation-5">
          <v-card-text>
            <!-- Row 1 -->
            <v-layout row wrap>
              <!-- Column 1: Additional Information Textarea -->
              <v-flex xs12>
                <v-textarea
                    v-model="model.additional.fields.additionalInformation"
                    :label="additionalInformationLabel"
                    :counter="1000"
                    :rules="[rules.max(1000)]"
                    :readonly="readOnly"
                    auto-grow>
                </v-textarea>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <!-- 4th Block -->
    <v-layout row wrap>
      <v-flex>
        <v-card class="mx-1 my-2 elevation-5">
          <v-card-text>
            <!-- Row 1 -->
            <v-layout row wrap>
              <!-- Column 1: Capable Warning Alert -->
              <v-flex xs12>
                <v-alert
                    class='jaa-applicant-message'
                    color="warning"
                    icon="warning"
                    v-model="applicantMessageState">
                  {{ applicantMessage }}
                </v-alert>
              </v-flex>
            </v-layout>

            <!-- Row 2 -->
            <v-layout row wrap>
              <!-- Column 1: Capable Text Block -->
              <v-flex xs12>
                <div>
                  Are you capable of performing in a reasonable manner; with or without
                  a reasonable accommodation, the activities involved in the job or
                  occupation for which you have applied? A review of the activities
                  involved in such a job or occupation has been given.
                </div>
              </v-flex>
            </v-layout>

            <!-- Row 3 -->
            <v-flex xs12 sm10 md7 lg4 xl2>
              <!-- Column 1: Capable Yes/No Question -->
              <v-radio-group v-model="model.additional.fields.isCapable" row>
                <v-radio
                    label="Yes"
                    value="yes"
                    :disabled="readOnly">
                </v-radio>
                <v-radio
                    label="No"
                    value="no"
                    :disabled="readOnly">
                </v-radio>
              </v-radio-group>
            </v-flex>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <!-- 5th Block -->
    <v-layout row wrap>
      <v-flex>
        <v-card class="mx-1 my-2 elevation-5">
          <v-toolbar class="grey lighten-3" flat>
            <v-toolbar-title>Reference #1</v-toolbar-title>
          </v-toolbar>

          <v-card-text>
            <!-- Row 1 -->
            <v-layout row wrap>
              <!-- Column 1: Reference #1 Name -->
              <v-flex xs12 md6>
                <v-text-field
                    v-model="model.additional.fields.references[0].name"
                    label="Name"
                    :rules="[rules.max(60)]"
                    :readonly="readOnly"
                    :clearable="!readOnly">
                </v-text-field>
              </v-flex>

              <!-- Column 2: Reference #1 Phone -->
              <v-flex xs12 md6>
                <v-text-field
                    v-model="model.additional.fields.references[0].phone"
                    label="Phone Number"
                    :rules="[rules.digits(10)]"
                    :readonly="readOnly"
                    mask="phone"
                    prepend-icon="phone"
                    min="10"
                    max="10"
                    :clearable="!readOnly">
                </v-text-field>
              </v-flex>
            </v-layout>

            <!-- Row 2 -->
            <v-layout row wrap>
              <!-- Column 1: Reference #1 Address -->
              <v-flex xs12>
                <v-text-field
                    v-model="model.additional.fields.references[0].address"
                    label="Address"
                    :rules="[rules.max(120)]"
                    :readonly="readOnly"
                    :clearable="!readOnly">
                </v-text-field>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <!-- 6th Block -->
    <v-layout row wrap>
      <v-flex>
        <v-card class="mx-1 my-2 elevation-5">
          <v-toolbar class="grey lighten-3" flat>
            <v-toolbar-title>Reference #2</v-toolbar-title>
          </v-toolbar>

          <v-card-text>
            <!-- Row 1 -->
            <v-layout row wrap>
              <!-- Column 1: Reference #2 Name -->
              <v-flex xs12 md6>
                <v-text-field
                    v-model="model.additional.fields.references[1].name"
                    label="Name"
                    :rules="[rules.max(60)]"
                    :readonly="readOnly"
                    :clearable="!readOnly">
                </v-text-field>
              </v-flex>

              <!-- Column 2: Reference #2 Phone -->
              <v-flex xs12 md6>
                <v-text-field
                    v-model="model.additional.fields.references[1].phone"
                    label="Phone Number"
                    :rules="[rules.digits(10)]"
                    :readonly="readOnly"
                    mask="phone"
                    prepend-icon="phone"
                    min="10"
                    max="10"
                    :clearable="!readOnly">
                </v-text-field>
              </v-flex>
            </v-layout>

            <!-- Row 2 -->
            <v-layout row wrap>
              <!-- Column 1: Reference #2 Address -->
              <v-flex xs12>
                <v-text-field
                    v-model="model.additional.fields.references[1].address"
                    label="Address"
                    :rules="[rules.max(120)]"
                    :readonly="readOnly"
                    :clearable="!readOnly">
                </v-text-field>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <!-- 7th Block -->
    <v-layout row wrap>
      <v-flex>
        <v-card class="mx-1 my-2 elevation-5">
          <v-toolbar class="grey lighten-3" flat>
            <v-toolbar-title>Reference #3</v-toolbar-title>
          </v-toolbar>

          <v-card-text>
            <!-- Row 1 -->
            <v-layout row wrap>
              <!-- Column 1: Reference #3 Name -->
              <v-flex xs12 md6>
                <v-text-field
                    v-model="model.additional.fields.references[2].name"
                    label="Name"
                    :rules="[rules.max(60)]"
                    :readonly="readOnly"
                    :clearable="!readOnly">
                </v-text-field>
              </v-flex>

              <!-- Column 2: Reference #3 Phone -->
              <v-flex xs12 md6>
                <v-text-field
                    v-model="model.additional.fields.references[2].phone"
                    label="Phone Number"
                    :rules="[rules.digits(10)]"
                    :readonly="readOnly"
                    mask="phone"
                    prepend-icon="phone"
                    min="10"
                    max="10"
                    :clearable="!readOnly">
                </v-text-field>
              </v-flex>
            </v-layout>

            <!-- Row 2 -->
            <v-layout row wrap>
              <!-- Column 1: Reference #3 Address -->
              <v-flex xs12>
                <v-text-field
                    v-model="model.additional.fields.references[2].address"
                    label="Address"
                    :rules="[rules.max(120)]"
                    :readonly="readOnly"
                    :clearable="!readOnly">
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
  name: "job-application-additional-form",

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

      otherQualificationsLabel:
        "Summarize special job-related skills and qualifications " +
        "acquired from employment or other experience.",
      additionalInformationLabel:
        "State any additional information you feel may be helpful " +
        "to us in considering your application.",
      applicantMessage:
        "Note to Applicants: Do not answer this question unless you have been " +
        "informed about the requirements of the job for which you are applying.",
      applicantMessageState: true
    };
  },

  /**
   * Methods
   */
  methods: {
    hasOfficeSkill(skill) {
      return this.model.additional.fields.officeSkills.includes(skill);
    }
  },

  /**
   * Lifecycle Hooks
   */
  created() {}
};
</script>

<style scoped>
.jaa-applicant-message {
  font-size: 120%;
  color: black;
}
</style>
