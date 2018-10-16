<template>
  <app-card>
    <h2 slot="title">Applicant Information</h2>
    <v-layout row wrap justify-space-between="">

      <!-- Row One -->
      <v-flex xs12 sm4>
        <v-text-field
          v-model="lastName"
          :rules="existsRule('Last Name')"
          label="Last Name"
          validate-on-blur
          >
        </v-text-field>
      </v-flex>

      <v-flex xs12 sm4>
        <v-text-field
          v-model="firstName"
          label="First Name"
          :rules="existsRule('First Name')"
          validate-on-blur
          >
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
          label="Address"
          :rules="existsRule('Address')"
          validate-on-blur
          >
        </v-text-field>
      </v-flex>

      <v-flex xs12 sm3>
        <v-text-field
          label="City"
          :rules="existsRule('City')"
          validate-on-blur
          >
        </v-text-field>
      </v-flex>

      <v-flex xs12 sm2>
        <v-autocomplete
          v-model="applicantState"
          :rules="existsRule('State')"
          validate-on-blur
          :items="states"
          label="State"
        >
          <v-slide-x-reverse-transition
            slot="append-outer"
            mode="out-in"
          >
         </v-slide-x-reverse-transition>
        </v-autocomplete>
      </v-flex>

      <v-flex xs12 sm2>
        <v-text-field
          v-model="zipCode"
          :rules="existsRule('Zip Code')"
          validate-on-blur
          label="Zip Code"
          mask="#####">
        </v-text-field>
      </v-flex>

      <!-- Row Three -->
      <v-flex xs12 sm6>
        <v-layout row wrap justify-space-between>
          
          <v-flex xs12 sm5>
            <v-text-field
              v-model="phoneNumber"
              :rules="phoneNumberRules"
              validate-on-blur
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
      <v-flex xs11>
        <h4>Are you able to work in the US?</h4>
        <v-radio-group
        v-model="ableToWorkInUS"
        :rules="existsRule('This')"
        validate-on-blur
        >
          <v-layout justify-strt>
            <v-flex xs2>
              <v-radio
                label="Yes"
                value=true>
              </v-radio>
            </v-flex>

            <v-flex>
              <v-radio
                label="No"
                value=false>
              </v-radio>
            </v-flex>

          </v-layout>
        </v-radio-group>
      </v-flex>
    </v-layout>

  </app-card>
</template>

<script>
import Card from "../shared/Card.vue";
import validatorMixin from "../../../mixins/validatorMixin";

export default {
  data() {
    return {
      lastName: "",
      firstName: "",
      middleName: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      phoneNumber: "",
      phoneNumberRules: [
        v => v.length === 10 || "10 digit phone number is required"
      ],
      emailAddress: "",
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
  },
  mixins: [validatorMixin]
};
</script>

<style>
</style>
