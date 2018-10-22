<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <!-- 1st Block -->
    <v-layout row wrap>
      <v-flex>
        <v-card class="mx-1 my-2 elevation-5">
          <v-toolbar class="grey lighten-3" flat>
            <v-toolbar-title>Elementary School</v-toolbar-title>
          </v-toolbar>

          <v-card-text>
            <!-- Row 1 -->
            <v-layout row wrap>
              <!-- Column 1: Elementary School Name -->
              <v-flex xs12 sm6>
                <v-text-field
                    v-model="model.education.fields.elementary.schoolName"
                    label="School Name"
                    :rules="[rules.max(60)]"
                    :readonly="readOnly"
                    :autofocus="!readOnly"
                    :clearable="!readOnly">
                </v-text-field>
              </v-flex>

              <!-- Column 2: Elementary School Address -->
              <v-flex xs12 sm6>
                <v-text-field
                    v-model="model.education.fields.elementary.schoolAddress"
                    label="School Address"
                    :rules="[rules.max(120)]"
                    :readonly="readOnly"
                    :clearable="!readOnly">
                </v-text-field>
              </v-flex>
            </v-layout>

            <!-- Row 2 -->
            <v-layout row wrap>
              <!-- Column 1: Elementary Course of Study -->
              <v-flex xs12 sm5>
                <v-text-field
                    v-model="model.education.fields.elementary.courseOfStudy"
                    label="Course of Study"
                    :rules="[rules.max(60)]"
                    :readonly="readOnly"
                    :clearable="!readOnly">
                </v-text-field>
              </v-flex>

              <!-- Column 2: Elementary Years Completed -->
              <v-flex xs12 sm2>
                <v-text-field
                    v-model="model.education.fields.elementary.yearsCompleted"
                    label="Years Completed"
                    :rules="[rules.max(2), rules.numeric]"
                    :readonly="readOnly"
                    :clearable="!readOnly">
                </v-text-field>
              </v-flex>

              <!-- Column 3: Elementary Diploma Degree -->
              <v-flex xs12 sm5>
                <v-text-field
                    v-model="model.education.fields.elementary.degree"
                    label="Diploma Degree"
                    :rules="[rules.max(60)]"
                    :readonly="readOnly"
                    :clearable="!readOnly">
                </v-text-field>
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
            <v-toolbar-title>High School</v-toolbar-title>
          </v-toolbar>

          <v-card-text>
            <!-- Row 1 -->
            <v-layout row wrap>
              <!-- Column 1: High School School Name -->
              <v-flex xs12 sm6>
                <v-text-field
                    v-model="model.education.fields.highSchool.schoolName"
                    label="School Name"
                    :rules="[rules.max(60)]"
                    :readonly="readOnly"
                    :clearable="!readOnly">
                </v-text-field>
              </v-flex>

              <!-- Column 2: High School School Address -->
              <v-flex xs12 sm6>
                <v-text-field
                    v-model="model.education.fields.highSchool.schoolAddress"
                    label="School Address"
                    :rules="[rules.max(120)]"
                    :readonly="readOnly"
                    :clearable="!readOnly">
                </v-text-field>
              </v-flex>
            </v-layout>

            <!-- Row 2 -->
            <v-layout row wrap>
              <!-- Column 1: High School Course of Study -->
              <v-flex xs12 sm5>
                <v-text-field
                    v-model="model.education.fields.highSchool.courseOfStudy"
                    label="Course of Study"
                    :rules="[rules.max(60)]"
                    :readonly="readOnly"
                    :clearable="!readOnly">
                </v-text-field>
              </v-flex>

              <!-- Column 2: High School Years Completed -->
              <v-flex xs12 sm2>
                <v-text-field
                    v-model="model.education.fields.highSchool.yearsCompleted"
                    label="Years Completed"
                    :rules="[rules.max(2), rules.numeric]"
                    :readonly="readOnly"
                    :clearable="!readOnly">
                </v-text-field>
              </v-flex>

              <!-- Column 3: High School Diploma Degree -->
              <v-flex xs12 sm5>
                <v-text-field
                    v-model="model.education.fields.highSchool.degree"
                    label="Diploma Degree"
                    :rules="[rules.max(60)]"
                    :readonly="readOnly"
                    :clearable="!readOnly">
                </v-text-field>
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
          <v-toolbar class="grey lighten-3" flat>
            <v-toolbar-title>Undergraduate College</v-toolbar-title>
          </v-toolbar>

          <v-card-text>
            <!-- Row 1 -->
            <v-layout row wrap>
              <!-- Column 1: Undergraduate School Name -->
              <v-flex xs12 sm6>
                <v-text-field
                    v-model="model.education.fields.undergraduate.schoolName"
                    label="School Name"
                    :rules="[rules.max(60)]"
                    :readonly="readOnly"
                    :clearable="!readOnly">
                </v-text-field>
              </v-flex>

              <!-- Column 2: Undergraduate School Address -->
              <v-flex xs12 sm6>
                <v-text-field
                    v-model="model.education.fields.undergraduate.schoolAddress"
                    label="School Address"
                    :rules="[rules.max(120)]"
                    :readonly="readOnly"
                    :clearable="!readOnly">
                </v-text-field>
              </v-flex>
            </v-layout>

            <!-- Row 2 -->
            <v-layout row wrap>
              <!-- Column 1: Undergraduate Course of Study -->
              <v-flex xs12 sm5>
                <v-text-field
                    v-model="model.education.fields.undergraduate.courseOfStudy"
                    label="Course of Study"
                    :rules="[rules.max(60)]"
                    :readonly="readOnly"
                    :clearable="!readOnly">
                </v-text-field>
              </v-flex>

              <!-- Column 2: Undergraduate Years Completed -->
              <v-flex xs12 sm2>
                <v-text-field
                    v-model="model.education.fields.undergraduate.yearsCompleted"
                    label="Years Completed"
                    :rules="[rules.max(2), rules.numeric]"
                    :readonly="readOnly"
                    :clearable="!readOnly">
                </v-text-field>
              </v-flex>

              <!-- Column 3: Undergraduate Diploma Degree -->
              <v-flex xs12 sm5>
                <v-text-field
                    v-model="model.education.fields.undergraduate.degree"
                    label="Diploma Degree"
                    :rules="[rules.max(60)]"
                    :readonly="readOnly"
                    :clearable="!readOnly">
                </v-text-field>
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
          <v-toolbar class="grey lighten-3" flat>
            <v-toolbar-title>Graduate Professional</v-toolbar-title>
          </v-toolbar>

          <v-card-text>
            <!-- Row 1 -->
            <v-layout row wrap>
              <!-- Column 1: Graduate School Name -->
              <v-flex xs12 sm6>
                <v-text-field
                    v-model="model.education.fields.graduate.schoolName"
                    label="School Name"
                    :rules="[rules.max(60)]"
                    :readonly="readOnly"
                    :clearable="!readOnly">
                </v-text-field>
              </v-flex>

              <!-- Column 2: Graduate School Address -->
              <v-flex xs12 sm6>
                <v-text-field
                    v-model="model.education.fields.graduate.schoolAddress"
                    label="School Address"
                    :rules="[rules.max(120)]"
                    :readonly="readOnly"
                    :clearable="!readOnly">
                </v-text-field>
              </v-flex>
            </v-layout>

            <!-- Row 2 -->
            <v-layout row wrap>
              <!-- Column 1: Graduate Course of Study -->
              <v-flex xs12 sm5>
                <v-text-field
                    v-model="model.education.fields.graduate.courseOfStudy"
                    label="Course of Study"
                    :rules="[rules.max(60)]"
                    :readonly="readOnly"
                    :clearable="!readOnly">
                </v-text-field>
              </v-flex>

              <!-- Column 2: Graduate Years Completed -->
              <v-flex xs12 sm2>
                <v-text-field
                    v-model="model.education.fields.graduate.yearsCompleted"
                    label="Years Completed"
                    :rules="[rules.max(2), rules.numeric]"
                    :readonly="readOnly"
                    :clearable="!readOnly">
                </v-text-field>
              </v-flex>

              <!-- Column 3: Graduate Diploma Degree -->
              <v-flex xs12 sm5>
                <v-text-field
                    v-model="model.education.fields.graduate.degree"
                    label="Diploma Degree"
                    :rules="[rules.max(60)]"
                    :readonly="readOnly"
                    :clearable="!readOnly">
                </v-text-field>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <!-- 5th Block -->
    <v-layout row wrap>
      <v-flex>
        <v-card class="mx-1 my-2 elevation-5">
          <v-toolbar class="grey lighten-3" flat>
            <v-toolbar-title>Other (specify)</v-toolbar-title>
          </v-toolbar>

          <v-card-text>
            <!-- Row 1 -->
            <v-layout row wrap>
              <!-- Column 1: Other School Name -->
              <v-flex xs12 sm6>
                <v-text-field
                    v-model="model.education.fields.other.schoolName"
                    label="School Name"
                    :rules="[rules.max(60)]"
                    :readonly="readOnly"
                    :clearable="!readOnly">
                </v-text-field>
              </v-flex>

              <!-- Column 2: Other School Address -->
              <v-flex xs12 sm6>
                <v-text-field
                    v-model="model.education.fields.other.schoolAddress"
                    label="School Address"
                    :rules="[rules.max(120)]"
                    :readonly="readOnly"
                    :clearable="!readOnly">
                </v-text-field>
              </v-flex>
            </v-layout>

            <!-- Row 2 -->
            <v-layout row wrap>
              <!-- Column 1: Other Course of Study -->
              <v-flex xs12 sm5>
                <v-text-field
                    v-model="model.education.fields.other.courseOfStudy"
                    label="Course of Study"
                    :rules="[rules.max(60)]"
                    :readonly="readOnly"
                    :clearable="!readOnly">
                </v-text-field>
              </v-flex>

              <!-- Column 2: Other Years Completed -->
              <v-flex xs12 sm2>
                <v-text-field
                    v-model="model.education.fields.other.yearsCompleted"
                    label="Years Completed"
                    :rules="[rules.max(2), rules.numeric]"
                    :readonly="readOnly"
                    :clearable="!readOnly">
                </v-text-field>
              </v-flex>

              <!-- Column 3: Other Diploma Degree -->
              <v-flex xs12 sm5>
                <v-text-field
                    v-model="model.education.fields.other.degree"
                    label="Diploma Degree"
                    :rules="[rules.max(60)]"
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
          <v-card-text>
            <!-- Row 1 -->
            <v-layout row wrap>
              <!-- Column 1: Training, Skills and Activities -->
              <v-flex xs12>
                <v-text-field
                    v-model="model.education.fields.training"
                    :label="trainingLabel"
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

    <!-- 7th Block -->
    <v-layout row wrap>
      <v-flex>
        <v-card class="mx-1 my-2 elevation-5">
          <v-card-text>
            <!-- Row 1 -->
            <v-layout row wrap>
              <!-- Column 1: Military Training -->
              <v-flex xs12>
                <v-text-field
                    v-model="model.education.fields.militaryTraining"
                    label="Describe any job-related training received in the United States military."
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

  </v-form>
</template>

<script>
export default {
  name: "job-application-education-form",

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

      trainingLabel:
        "Describe any specialized training, apprenticeship, skills " +
        "and extra-curricular activities."
    };
  },

  /**
   * Methods
   */
  methods: {},

  /**
   * Lifecycle Hooks
   */
  created() {}
};
</script>

<style scoped>
</style>
