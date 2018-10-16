<template>
  <app-card>
    <h2 slot="title">Applicant Information</h2>
    <v-layout row wrap justify-space-between="">

      <!-- Row One -->
      <v-flex xs12 sm4>
        <v-text-field
          label="Last Name">
        </v-text-field>
      </v-flex>

      <v-flex xs12 sm4>
        <v-text-field
          label="First Name">
        </v-text-field>
      </v-flex>

      <v-flex xs12 sm4>
        <v-text-field
          label="Middle Name">
        </v-text-field>
      </v-flex>

      <!-- Row Two -->
      <v-flex xs12 sm4>
        <v-text-field
          label="Address">
        </v-text-field>
      </v-flex>

      <v-flex xs12 sm3>
        <v-text-field
          label="City">
        </v-text-field>
      </v-flex>

      <v-flex xs12 sm2>
        <v-autocomplete
          v-model="applicantState"
          :items="states"
          persistent-hint
          prepend-icon="mdi-city"
        >
          <v-slide-x-reverse-transition
            slot="append-outer"
            mode="out-in"
          >
            <v-icon
              :color="isEditing ? 'success' : 'info'"
              :key="`icon-${isEditing}`"
              @click="isEditing = !isEditing"
              v-text="isEditing ? 'mdi-check-outline' : 'mdi-circle-edit-outline'"
            ></v-icon>
          </v-slide-x-reverse-transition>
        </v-autocomplete>
      </v-flex>

      <v-flex xs12 sm2>
        <v-text-field
          label="Zip Code"
          mask="#####">
        </v-text-field>
      </v-flex>

      <!-- Row Three -->
      <v-flex xs12 sm6>
        <v-layout row wrap justify-space-between>
          
          <v-flex xs12 sm5>
            <v-text-field
              label="Phone Number"
              prepend-icon="phone"
              mask="phone">
            </v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              label="Email Address">
            </v-text-field>
          </v-flex>

        </v-layout>
      </v-flex>

      <!-- Row Four -->
      <v-flex xs12>
        <h4>Are you able to work in the US?</h4>
        <v-radio-group
        v-model="ableToWorkInUS">
          <v-layout>

            <v-radio
              label="Yes"
              value=true>
            </v-radio>

            <v-radio
              label="No"
              value=false>
            </v-radio>

          </v-layout>
        </v-radio-group>
      </v-flex>
    </v-layout>

  </app-card>
</template>

<script>
import Card from "../shared/Card.vue";

export default {
  data() {
    return {
      applicantState: "",
      ableToWorkInUS: null,

      states: [
        "Alabama",
        "Alaska",
        "American Samoa",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "District of Columbia",
        "Federated States of Micronesia",
        "Florida",
        "Georgia",
        "Guam",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Marshall Islands",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Northern Mariana Islands",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Palau",
        "Pennsylvania",
        "Puerto Rico",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virgin Island",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
      ]
    };
  },
  components: {
    appCard: Card
  }
};
</script>

<style>
</style>
