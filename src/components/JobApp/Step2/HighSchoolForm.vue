<template>
  <app-card>
    <h2 slot="title">High School</h2>
    <v-layout row wrap justify-space-between="">

      <!-- Row One -->
      <v-flex xs12 sm6>
        <v-text-field
          @blur="updateForm"
          v-model="value.schoolName"
          label="School Name">
        </v-text-field>
      </v-flex>

      <v-flex xs12 sm6>
        <v-text-field
          @blur="updateForm"
          v-model="value.schoolAddress"
          label="School Address">
        </v-text-field>
      </v-flex>

      <!-- Row Two -->
      <v-flex xs12 sm5>
        <v-text-field
          @blur="updateForm"
          v-model="value.courseOfStudy"
          label="Area of Study">
        </v-text-field>
      </v-flex>

      <v-flex xs12 sm3>
        <v-text-field
          @blur="updateForm"
          v-model="value.yearsCompleted"
          label="Years Completed">
        </v-text-field>
      </v-flex>

      <v-flex xs12 sm4>
        <v-text-field
          @blur="updateForm"
          v-model="value.degree"
          label="Diploma">
        </v-text-field>
      </v-flex>
    </v-layout>

  </app-card>
</template>

<script>
import Card from "../shared/Card.vue";

export default {
  methods: {
    updateForm() {
      this.$emit("input", this.value);
    }
  },
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  components: {
    appCard: Card
  }
};
</script>

<style>
</style>
