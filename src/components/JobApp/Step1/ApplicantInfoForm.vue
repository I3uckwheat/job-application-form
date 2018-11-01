<template>
  <app-card>
    <h2 slot="title">Applicant Information</h2>
    <v-layout row wrap justify-space-between="">

      <!-- Row One -->
      <v-flex xs12 sm4>
        <v-text-field
          @blur="updateForm"
          v-model="value.lastName"
          :rules="existsRule('Last Name')"
          label="Last Name"
          validate-on-blur
          >
        </v-text-field>
      </v-flex>

      <v-flex xs12 sm4>
        <v-text-field
          @blur="updateForm"
          v-model="value.firstName"
          label="First Name"
          :rules="existsRule('First Name')"
          validate-on-blur
          >
        </v-text-field>
      </v-flex>

      <v-flex xs12 sm4>
        <v-text-field
          @blur="updateForm"
          v-model="value.middleName"
          label="Middle Name">
        </v-text-field>
      </v-flex>

      <!-- Row Two -->
      <v-flex xs12 sm4>
        <v-text-field
          @blur="updateForm"
          label="Address"
          v-model="value.address"
          :rules="existsRule('Address')"
          validate-on-blur
          >
        </v-text-field>
      </v-flex>

      <v-flex xs12 sm3>
        <v-text-field
          @blur="updateForm"
          label="City"
          v-model="value.city"
          :rules="existsRule('City')"
          validate-on-blur
          >
        </v-text-field>
      </v-flex>

      <v-flex xs12 sm2>
        <v-autocomplete
          @blur="updateForm"
          v-model="value.state"
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
          @blur="updateForm"
          v-model="value.zipCode"
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
              @blur="updateForm"
              v-model="value.primaryPhone"
              :rules="phoneNumberRules"
              :validate-on-blur="true"
              label="Phone Number"
              prepend-icon="phone"
              mask="phone">
            </v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              @blur="updateForm"
              v-model="value.emailAddress"
              :rules="rules.email"
              label="Email Address">
            </v-text-field>
          </v-flex>

        </v-layout>
      </v-flex>

      <!-- Row Four -->
      <v-flex xs11>
        <h4>Eligibility</h4>
        <p>Are you prevented from lawfully becoming employed in this country because of Visa or Immigration Status? <span class='slant'>Proof of citizenship or immigration status will be required upon employment</span></p>
        <v-radio-group
          v-model="value.isEmploymentPrevented"
          :rules="existsRule('This')"
          validate-on-blur
          @change="updateForm"
        >
          <v-layout justify-strt>
            <v-flex xs5 sm3>
              <v-radio
                label="Yes"
                value="Y">
              </v-radio>
            </v-flex>

            <v-flex>
              <v-radio
                label="No"
                value="N">
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
  data() {
    return {
      phoneNumberRules: [
        ...this.existsRule("Phone Number"),
        v => !v || v.length === 10 || "10 digit phone number is required"
      ],
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

<style scoped>
.slant {
  font-style: italic;
}
</style>
