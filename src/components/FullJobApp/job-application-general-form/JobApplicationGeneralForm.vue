<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <!-- 1st Block -->
    <v-layout row wrap>
      <v-flex>
        <v-card class="mx-1 my-2 elevation-5">
          <v-toolbar class="grey lighten-3" flat>
            <v-toolbar-title>Application Details</v-toolbar-title>
          </v-toolbar>

          <v-card-text>
            <!-- Row 1 -->
            <v-layout row wrap>
              <!-- Column 1: Position(s) Applied For -->
              <v-flex xs12 sm6>
                <v-text-field
                    v-model="model.general.fields.positions"
                    label="Position(s) Applied For"
                    :rules="[rules.required, rules.max(60)]"
                    :autofocus="!readOnly"
                    :clearable="!readOnly"
                    :readonly="readOnly"
                    required>
                </v-text-field>
              </v-flex>

              <!-- Column 2: Date of Application -->
              <v-flex xs12 sm6>
                  <v-text-field
                      slot="activator"
                      label="Date of Application"
                      v-model="model.general.fields.applicationDate"
                      prepend-icon="event"
                      disabled
                      readonly>
                  </v-text-field>
              </v-flex>
            </v-layout>

            <!-- Row 2a -->
            <v-layout row wrap>
              <!-- Only Column: How Did You Learn About Us? -->
              <v-flex xs12>
                <v-radio-group
                    label="How Did You Learn About Us?"
                    v-model="model.general.fields.learnedAboutUs"
                    :rules="[rules.required]"
                    required>
                  <v-layout row wrap>
                    <v-flex xs12 sm6 md4 lg2>
                      <v-radio
                          label="Advertisement"
                          value="Advertisement"
                          required
                          :disabled="readOnly">
                      </v-radio>
                    </v-flex>
                    <v-flex xs12 sm6 md4 lg2>
                      <v-radio
                          label="Relative"
                          value="Relative"
                          :disabled="readOnly">
                      </v-radio>
                    </v-flex>
                    <v-flex xs12 sm6 md4 lg2>
                      <v-radio
                          label="Inquiry"
                          value="Inquiry"
                          :disabled="readOnly">
                      </v-radio>
                    </v-flex>
                    <v-flex xs12 sm6 md4 lg2>
                      <v-radio
                          label="Employment Agency"
                          value="Agency"
                          :disabled="readOnly">
                      </v-radio>
                    </v-flex>
                    <v-flex xs12 sm6 md4 lg2>
                      <v-radio
                          label="Friend"
                          value="Friend"
                          :disabled="readOnly">
                      </v-radio>
                    </v-flex>
                    <v-flex xs12 sm6 md4 lg2>
                      <v-radio
                          label="Other"
                          value="Other"
                          :disabled="readOnly">
                      </v-radio>
                    </v-flex>
                  </v-layout>
                </v-radio-group>
              </v-flex>
            </v-layout>

            <!-- Row 2b -->
            <v-layout
                v-if="model.general.fields.learnedAboutUs === 'Other'"
                row
                wrap>
              <!-- Only Column: How Did You Learn About Us? -->
              <v-flex>
                <v-text-field
                    v-model="model.general.fields.learnedAboutUsOther"
                    label="Please list other source"
                    :rules="[rules.required, rules.max(60)]"
                    :readonly="readOnly"
                    :autofocus="!readOnly">
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
            <v-toolbar-title>Applicant Information</v-toolbar-title>
          </v-toolbar>

          <v-card-text>
            <!-- Row 1 -->
            <v-layout row wrap>
              <!-- Column 1: Last Name -->
              <v-flex xs12 md4>
                <v-text-field
                    v-model="model.general.fields.lastName"
                    label="Last Name"
                    :rules="[rules.required, rules.max(40)]"
                    :clearable="!readOnly"
                    :readonly="readOnly"
                    required>
                </v-text-field>
              </v-flex>

              <!-- Column 2: First Name -->
              <v-flex xs12 md4>
                <v-text-field
                    v-model="model.general.fields.firstName"
                    label="First Name"
                    :rules="[rules.required, rules.max(40)]"
                    :clearable="!readOnly"
                    :readonly="readOnly"
                    required>
                </v-text-field>
              </v-flex>

              <!-- Column 3: Middle Name -->
              <v-flex xs12 md4>
                <v-text-field
                    v-model="model.general.fields.middleName"
                    label="Middle Name"
                    :rules="[rules.required, rules.max(40)]"
                    :clearable="!readOnly"
                    :readonly="readOnly"
                    required>
                </v-text-field>
              </v-flex>
            </v-layout>

            <!-- Row 2 -->
            <v-layout row wrap>
              <!-- Column 1: Address -->
              <v-flex xs12 md4>
                <v-text-field
                    v-model="model.general.fields.address"
                    label="Address"
                    :rules="[rules.required, rules.max(120)]"
                    :clearable="!readOnly"
                    :readonly="readOnly"
                    required>
                </v-text-field>
              </v-flex>

              <!-- Column 2: City -->
              <v-flex xs12 md3>
                <v-text-field
                    v-model="model.general.fields.city"
                    label="City"
                    :rules="[rules.required, rules.max(40)]"
                    :clearable="!readOnly"
                    :readonly="readOnly"
                    required>
                </v-text-field>
              </v-flex>

              <!-- Column 3: State -->
              <v-flex xs12 md3>
                <v-select
                    :items="this.$store.state.usStatesAndTerritories"
                    v-model="model.general.fields.state"
                    label="State"
                    :rules="[rules.required]"
                    autocomplete
                    auto
                    :readonly="readOnly"
                    required>
                </v-select>
              </v-flex>

              <!-- Column 4: Zip Code -->
              <v-flex xs12 md2>
                <v-text-field
                    v-model="model.general.fields.zipCode"
                    label="Zip Code"
                    :rules="[rules.required, rules.digits(5)]"
                    mask="#####"
                    min="5"
                    max="5"
                    :clearable="!readOnly"
                    :readonly="readOnly"
                    required>
                </v-text-field>
              </v-flex>
            </v-layout>

            <!-- Row 3 -->
            <v-layout row wrap>
              <!-- Column 1: Primary Phone -->
              <v-flex xs12 md4>
                <v-text-field
                    v-model="model.general.fields.primaryPhone"
                    label="Phone Number"
                    :rules="[rules.required, rules.digits(10)]"
                    mask="phone"
                    prepend-icon="phone"
                    min="10"
                    max="10"
                    :clearable="!readOnly"
                    :readonly="readOnly"
                    required>
                </v-text-field>
              </v-flex>

              <!-- Column 2: Email Address -->
              <v-flex xs12 md4>
                <v-text-field
                    v-model="model.general.fields.emailAddress"
                    label="Email Address"
                    :rules="[rules.email()]"
                    min="5"
                    max="255"
                    :readonly="readOnly"
                    :clearable="readOnly">
                </v-text-field>
              </v-flex>

              <!-- Column 3: Social Security Number -->
              <v-flex xs12 md4>
                <v-text-field
                    hint="We will collect this securely later."
                    persistent-hint
                    disabled
                    mask="social"
                    label="Social Security Number">
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
            <v-toolbar-title>Employment Questions</v-toolbar-title>
          </v-toolbar>

          <v-card-text>
            <!-- Row 1 -->
            <v-layout row wrap>
              <!-- Column 1: Best Contact Time Label -->
              <v-flex xs12 md9>
                <span>
                  Best time to contact you at home is:
                </span>
              </v-flex>

              <!-- Column 2: Best Contact Time Picker -->
              <v-flex xs12 md3>
                <v-dialog
                    v-model="modals.contactTime"
                    lazy
                    :disabled="readOnly"
                    full-width>
                  <v-text-field
                      slot="activator"
                      v-model="model.general.fields.contactTime"
                      label="Best Contact Time"
                      :rules="[rules.required]"
                      prepend-icon="access_time"
                      readonly
                      required>
                  </v-text-field>
                  <v-time-picker
                      v-model="model.general.fields.contactTime"
                      actions>
                    <template slot-scope="{ save, cancel }">
                      <v-card-actions>
                        <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                        <v-btn flat color="primary" @click="save">Save</v-btn>
                      </v-card-actions>
                    </template>
                  </v-time-picker>
                </v-dialog>
              </v-flex>
            </v-layout>

            <!-- Row 2 -->
            <v-layout row wrap>
              <!-- Column 1: Has Work Eligibility Proof Label -->
              <v-flex xs12 md9>
                <span>
                  If you are under 18 years of age, can you provide required proof of your
                  eligibility to work?
                </span>
              </v-flex>

              <!-- Column 2: Has Work Eligibility Proof Radio Buttons -->
              <v-flex xs12 sm6 md3>
                <v-radio-group
                    v-model="model.general.fields.hasWorkProof"
                    row>
                  <v-radio
                      label="Yes"
                      value="Y"
                      type="radio"
                      :disabled="readOnly">
                  </v-radio>
                  <v-radio
                      label="No"
                      value="N"
                      type="radio"
                      :disabled="readOnly">
                  </v-radio>
                </v-radio-group>
              </v-flex>
            </v-layout>

            <!-- Row 3a -->
            <v-layout row wrap>
              <!-- Column 1: Has Filed Before Label -->
              <v-flex xs12 md9>
                <span>
                  Have you ever filed an application with us before?
                </span>
              </v-flex>

              <!-- Column 2: Has Filed Before Radio Buttons -->
              <v-flex xs12 sm6 md3>
                <v-radio-group
                    v-model="model.general.fields.hasFiledBefore"
                    :rules="[rules.required]"
                    row
                    :disabled="readOnly"
                    required>
                  <v-radio
                      label="Yes"
                      value="Y"
                      type="radio"
                      :disabled="readOnly">
                  </v-radio>
                  <v-radio
                      label="No"
                      value="N"
                      type="radio"
                      :disabled="readOnly">
                  </v-radio>
                </v-radio-group>
              </v-flex>
            </v-layout>

            <!-- Row 3b -->
            <v-layout
                v-if="model.general.fields.hasFiledBefore === 'Y'"
                row
                wrap>
              <!-- Only Column: Date Filed Before -->
              <v-flex class="ma-2">
                <v-dialog
                    v-model="modals.hasFiledBeforeDate"
                    lazy
                    :disabled="readOnly"
                    full-width>
                  <v-text-field
                      slot="activator"
                      label="If Yes, give date"
                      v-model="model.general.fields.hasFiledBeforeDate"
                      prepend-icon="event"
                      :rules="[rules.required]"
                      autofocus
                      readonly
                      required>
                  </v-text-field>
                  <v-date-picker
                      v-model="model.general.fields.hasFiledBeforeDate"
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

            <!-- Row 4a -->
            <v-layout row wrap>
              <!-- Column 1: Was Employed Before Label -->
              <v-flex xs12 md9>
                <span>
                  Have you ever been employed with us before?
                </span>
              </v-flex>

              <!-- Column 2: Was Employed Before Radio Buttons -->
              <v-flex xs12 sm6 md3>
                <v-radio-group
                    v-model="model.general.fields.wasEmployedBefore"
                    :rules="[rules.required]"
                    row
                    required>
                  <v-radio
                      label="Yes"
                      value="Y"
                      type="radio"
                      :disabled="readOnly">
                  </v-radio>
                  <v-radio
                      label="No"
                      value="N"
                      type="radio"
                      :disabled="readOnly">
                  </v-radio>
                </v-radio-group>
              </v-flex>
            </v-layout>

            <!-- Row 4b -->
            <v-layout
                v-if="model.general.fields.wasEmployedBefore === 'Y'"
                row
                wrap>
              <!-- Only Column: Was Employed Before -->
              <v-flex>
                <v-dialog
                    v-model="modals.wasEmployedBeforeDate"
                    lazy
                    :disabled="readOnly"
                    full-width>
                  <v-text-field
                      slot="activator"
                      label="If Yes, give date"
                      v-model="model.general.fields.wasEmployedBeforeDate"
                      prepend-icon="event"
                      :rules="[rules.required]"
                      autofocus
                      readonly
                      required>
                  </v-text-field>
                  <v-date-picker
                      v-model="model.general.fields.wasEmployedBeforeDate"
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

            <!-- Row 5 -->
            <v-layout row wrap>
              <!-- Column 1: Is Relation Employed Here Label -->
              <v-flex xs12 md9>
                <span>
                  Do any of your friends, or relatives, other than spouse, work here?
                </span>
              </v-flex>

              <!-- Column 2: Is Relation Employed Here Radio Buttons -->
              <v-flex xs12 sm6 md3>
                <v-radio-group
                    v-model="model.general.fields.isRelationEmployed"
                    :rules="[rules.required]"
                    row
                    required>
                  <v-radio
                      label="Yes"
                      value="Y"
                      type="radio"
                      :disabled="readOnly">
                  </v-radio>
                  <v-radio
                      label="No"
                      value="N"
                      type="radio"
                      :disabled="readOnly">
                  </v-radio>
                </v-radio-group>
              </v-flex>
            </v-layout>

            <!-- Row 6 -->
            <v-layout row wrap>
              <!-- Column 1: Currently Employed? Label -->
              <v-flex xs12 md9>
                <span>
                  Are you currently employed?
                </span>
              </v-flex>

              <!-- Column 2: Currently Employed? Radio Buttons -->
              <v-flex xs12 sm6 md3>
                <v-radio-group
                    v-model="model.general.fields.isCurrentlyEmployed"
                    :rules="[rules.required]"
                    row
                    required>
                  <v-radio
                      label="Yes"
                      value="Y"
                      type="radio"
                      :disabled="readOnly">
                  </v-radio>
                  <v-radio
                      label="No"
                      value="N"
                      type="radio"
                      :disabled="readOnly">
                  </v-radio>
                </v-radio-group>
              </v-flex>
            </v-layout>

            <!-- Row 7 -->
            <v-layout row wrap>
              <!-- Column 1: Can Contact Employer? Label -->
              <v-flex xs12 md9>
                <span>
                  May we contact your present employer?
                </span>
              </v-flex>

              <!-- Column 2: Can Contact Employer? Radio Buttons -->
              <v-flex xs12 sm6 md3>
                <v-radio-group
                    v-model="model.general.fields.canContactEmployer"
                    :rules="[rules.required]"
                    row
                    required>
                  <v-radio
                      label="Yes"
                      value="Y"
                      type="radio"
                      :disabled="readOnly">
                  </v-radio>
                  <v-radio
                      label="No"
                      value="N"
                      type="radio"
                      :disabled="readOnly">
                  </v-radio>
                </v-radio-group>
              </v-flex>
            </v-layout>

            <!-- Row 8 -->
            <v-layout row wrap>
              <!-- Column 1: Is Employment Prevented? Label -->
              <v-flex xs12 md9>
                <span>
                  Are you prevented from lawfully becoming employed in this
                  country because of Visa or Immigration Status?
                  <em>
                    Proof of citizenship or immigration status will be
                    required upon employment
                  </em>
                </span>
              </v-flex>

              <!-- Column 2: Is Employment Prevented? Radio Buttons -->
              <v-flex xs12 sm6 md3>
                <v-radio-group
                    v-model="model.general.fields.isEmploymentPrevented"
                    :rules="[rules.required]"
                    row
                    required>
                  <v-radio
                      label="Yes"
                      value="Y"
                      type="radio"
                      :disabled="readOnly">
                  </v-radio>
                  <v-radio
                      label="No"
                      value="N"
                      type="radio"
                      :disabled="readOnly">
                  </v-radio>
                </v-radio-group>
              </v-flex>
            </v-layout>

            <!-- Row 9 -->
            <v-layout row wrap>
              <!-- Column 1: Date Available Picker -->
              <v-flex xs12 md6>
                <v-dialog
                    v-model="modals.dateAvailable"
                    lazy
                    :disabled="readOnly"
                    full-width>
                  <v-text-field
                      slot="activator"
                      label="Date Available For Work"
                      v-model="model.general.fields.dateAvailable"
                      prepend-icon="event"
                      :rules="[rules.required]"
                      readonly
                      required>
                  </v-text-field>
                  <v-date-picker
                      v-model="model.general.fields.dateAvailable"
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

              <!-- Column 2: Desired Salary Range -->
              <v-flex xs12 md6>
                <v-text-field
                    v-model="model.general.fields.desiredSalary"
                    label="Desired Salary Range"
                    :rules="[rules.required, rules.max(40)]"
                    prefix="$"
                    :clearable="!readOnly"
                    :readonly="readOnly"
                    required>
                </v-text-field>
              </v-flex>
            </v-layout>

            <!-- Row 10 -->
            <v-layout row wrap>
              <!-- Column 1: Work Availability Label -->
              <v-flex xs12>
                <span>Are You Available to work:</span>
              </v-flex>

              <!-- Column 2: Work Availability Full-Time -->
              <v-flex xs12 md3>
                <v-checkbox
                    v-model="model.general.fields.availabilityType"
                    label="Full-Time"
                    value="Full-Time"
                    :disabled="readOnly">
                </v-checkbox>
              </v-flex>

              <!-- Column 3: Work Availability Full-Time Shifts -->
              <v-flex xs12 md9>
                <!-- Options for Full-Time -->
                <v-layout
                    v-if="isAvailableForShift('Full-Time')"
                    row
                    wrap>
                  <v-flex offset-xs1 xs11 offset-md0 md4 lg3>
                    <v-checkbox
                        v-model="model.general.fields.fullTimeShifts"
                        label="1st Shift"
                        value="1st Shift"
                        :disabled="readOnly">
                    </v-checkbox>
                  </v-flex>
                  <v-flex offset-xs1 xs11 offset-md0 md4 lg3>
                    <v-checkbox
                        v-model="model.general.fields.fullTimeShifts"
                        label="2nd Shift"
                        value="2nd Shift"
                        :disabled="readOnly">
                    </v-checkbox>
                  </v-flex>
                  <v-flex offset-xs1 xs11 offset-md0 md4 lg3>
                    <v-checkbox
                        v-model="model.general.fields.fullTimeShifts"
                        label="3rd Shift"
                        value="3rd Shift"
                        :disabled="readOnly">
                    </v-checkbox>
                  </v-flex>
                </v-layout>
              </v-flex>

              <!-- Column 4: Work Availability Part-Time -->
              <v-flex xs12 md3>
                <v-checkbox
                    v-model="model.general.fields.availabilityType"
                    label="Part-Time"
                    value="Part-Time"
                    :disabled="readOnly">
                </v-checkbox>
              </v-flex>

              <!-- Column 5: Work Availability Part-Time Shifts -->
              <v-flex xs12 md9>
                <!-- Options for Part-Time -->
                <v-layout
                    v-if="isAvailableForShift('Part-Time')"
                    row
                    wrap>
                  <v-flex offset-xs1 xs11 offset-md0 md4 lg3>
                    <v-checkbox
                        v-model="model.general.fields.partTimeShifts"
                        label="Mornings"
                        value="Mornings"
                        :disabled="readOnly">
                    </v-checkbox>
                  </v-flex>
                  <v-flex offset-xs1 xs11 offset-md0 md4 lg3>
                    <v-checkbox
                        v-model="model.general.fields.partTimeShifts"
                        label="Afternoon"
                        value="Afternoon"
                        :disabled="readOnly">
                    </v-checkbox>
                  </v-flex>
                  <v-flex offset-xs1 xs11 offset-md0 md4 lg3>
                    <v-checkbox
                        v-model="model.general.fields.partTimeShifts"
                        label="Evenings"
                        value="Evenings"
                        :disabled="readOnly">
                    </v-checkbox>
                  </v-flex>
                </v-layout>
              </v-flex>

              <!-- Column 6: Work Availability Temporary -->
              <v-flex xs12 md3>
                <v-checkbox
                    v-model="model.general.fields.availabilityType"
                    label="Temporary"
                    value="Temporary"
                    :disabled="readOnly">
                </v-checkbox>
              </v-flex>

              <!-- Column 7: Work Availability Temporary Date Range -->
              <v-flex xs12 md9>
                <v-layout row wrap>
                  <v-flex offset-xs1 xs11 offset-md0 md6>
                    <!-- Temporary Shift Start Date Picker -->
                    <v-dialog
                        v-if="isAvailableForShift('Temporary')"
                        v-model="modals.temporaryDateStart"
                        lazy
                        :disabled="readOnly"
                        full-width>
                      <v-text-field
                          slot="activator"
                          label="Dates Available (Start)"
                          v-model="model.general.fields.temporaryDateStart"
                          prepend-icon="event"
                          :rules="[rules.required]"
                          readonly
                          required>
                      </v-text-field>
                      <v-date-picker
                          v-model="model.general.fields.temporaryDateStart"
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

                  <v-flex offset-xs1 xs11 offset-md0 md6>
                    <!-- Temporary Shift End Date Picker -->
                    <v-dialog
                        v-if="isAvailableForShift('Temporary')"
                        v-model="modals.temporaryDateEnd"
                        lazy
                        :disabled="readOnly"
                        full-width>
                      <v-text-field
                          slot="activator"
                          label=" Dates Available (End)"
                          v-model="model.general.fields.temporaryDateEnd"
                          prepend-icon="event"
                          :rules="[rules.required]"
                          readonly
                          required>
                      </v-text-field>
                      <v-date-picker
                          v-model="model.general.fields.temporaryDateEnd"
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
              </v-flex>

            </v-layout>

            <!-- Row 11 -->
            <v-layout row wrap>
              <!-- Column 1: Is On Layoff Status? Label -->
              <v-flex xs12 md9>
                <span>
                  Are you currently on "lay-off" status and subject to recall?
                </span>
              </v-flex>

              <!-- Column 2: Is On Layoff Status? Radio Buttons -->
              <v-flex xs12 sm6 md3>
                <v-radio-group
                    v-model="model.general.fields.onLayoff"
                    :rules="[rules.required]"
                    row
                    required>
                  <v-radio
                      label="Yes"
                      value="Y"
                      type="radio"
                      :disabled="readOnly">
                  </v-radio>
                  <v-radio
                      label="No"
                      value="N"
                      type="radio"
                      :disabled="readOnly">
                  </v-radio>
                </v-radio-group>
              </v-flex>
            </v-layout>

            <!-- Row 12 -->
            <v-layout row wrap>
              <!-- Column 1: Can Travel? Label -->
              <v-flex xs12 md9>
                <span>
                  Can you travel if a job requires it?
                </span>
              </v-flex>

              <!-- Column 2: Can Travel? Radio Buttons -->
              <v-flex xs12 sm6 md3>
                <v-radio-group
                    v-model="model.general.fields.canTravel"
                    :rules="[rules.required]"
                    row
                    required>
                  <v-radio
                      label="Yes"
                      value="Y"
                      type="radio"
                      :disabled="readOnly">
                  </v-radio>
                  <v-radio
                      label="No"
                      value="N"
                      type="radio"
                      :disabled="readOnly">
                  </v-radio>
                </v-radio-group>
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
  name: "job-application-general-form",

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
        contactTime: false,
        hasFiledBeforeDate: false,
        wasEmployedBeforeDate: false,
        dateAvailable: false,
        temporaryDateStart: false,
        temporaryDateEnd: false
      }
    };
  },

  /**
   * Methods
   */
  methods: {
    isAvailableForShift(type) {
      return this.model.general.fields.availabilityType.includes(type);
    }
  },

  /**
   * Lifecycle Hooks
   */
  created() {
    // don't make user fill in today's date
    this.model.general.fields.applicationDate = this.$moment().format(
      "YYYY-MM-DD"
    );
  }
};
</script>

<style scoped>
span {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
</style>
