<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <!-- Application Not Submitted Warning -->
    <v-alert
        class='jas-instructions-message'
        color="warning"
        icon="warning"
        v-model="submitMessageState"
        dismissible>
      Your application is NOT complete until you click SUBMIT APPLICATION at
      the bottom of this page.
    </v-alert>

    <!-- Instructions -->
    <h6>Please carefully review &amp; submit the information provided.</h6>

    <div ref="ReviewHtml" id="ReviewHtml">
      <section>
        <h5>General Information</h5>

        <div>
          <label>Position(s) Applied For: </label>
          <span>{{ model.general.fields.positions || 'Not Answered' }}</span>
        </div>
        <div>
          <label>Date of Application: </label>
          <span>{{ model.general.fields.applicationDate }}</span>
        </div>
        <div>
          <label>How Did You Learn About Us?: </label>
          <span>{{ model.general.fields.learnedAboutUs || 'Not Answered' }}</span>
          <span>{{ model.general.fields.learnedAboutUsOther }}</span>
        </div>
        <div>
          <label>Applicant: </label>
          <span>
            {{ model.general.fields.firstName || 'Not Answered' }}
            {{ model.general.fields.middleName || '' }}
            {{ model.general.fields.lastName || '' }}
          </span>
          <span>
            {{ model.general.fields.address }}<br>
            {{ model.general.fields.city }},
            {{ model.general.fields.state }}
            {{ model.general.fields.zipCode }}
          </span>
        </div>
        <div>
          <label>Phone Number: </label>
          <span>{{ model.general.fields.primaryPhone || 'Not Answered' }}</span>
        </div>
        <div>
          <label>Email Address: </label>
          <span>{{ model.general.fields.emailAddress || 'Not Answered' }}</span>
        </div>
        <div>
          <label>Best time to contact you at home is:</label>
          <span>{{ model.general.fields.contactTime || 'Not Answered' }}</span>
        </div>
        <div>
          <label>If you are under 18 years of age, can you provide required proof of your eligibility to work?</label>
          <span>{{ convertYesNo(model.general.fields.hasWorkProof) }}</span>
        </div>
        <div>
          <label>Have you ever filed an application with us before?</label>
          <span>{{ convertYesNo(model.general.fields.hasFiledBefore) }}</span>
          <span v-if="model.general.fields.hasFiledBefore === 'Y'">
            {{ model.general.fields.hasFiledBeforeDate || 'Not Answered' }}
          </span>
        </div>
        <div>
          <label>Have you ever been employed with us before?</label>
          <span>{{ convertYesNo(model.general.fields.wasEmployedBefore) }}</span>
          <span v-if="model.general.fields.wasEmployedBefore === 'Y'">
            {{ model.general.fields.wasEmployedBeforeDate || 'Not Answered' }}
          </span>
        </div>
        <div>
          <label>Do any of your friends, or relatives, other than spouse, work here?</label>
          <span>{{ convertYesNo(model.general.fields.isRelationEmployed) }}</span>
        </div>
        <div>
          <label>Are you currently employed?</label>
          <span>{{ convertYesNo(model.general.fields.isCurrentlyEmployed) }}</span>
        </div>
        <div>
          <label>May we contact your present employer?</label>
          <span>{{ convertYesNo(model.general.fields.canContactEmployer) }}</span>
        </div>
        <div>
          <label>Are you prevented from lawfully becoming employed in this country because of Visa or Immigration Status? Proof of citizenship or immigration status will be required upon employment</label>
          <span>{{ convertYesNo(model.general.fields.isEmploymentPrevented) }}</span>
        </div>
        <div>
          <label>Date Available For Work:</label>
          <span>{{ model.general.fields.dateAvailable || 'Not Answered' }}</span>
        </div>
        <div>
          <label>Desired Salary Range:</label>
          <span>{{ model.general.fields.desiredSalary || 'Not Answered' }}</span>
        </div>
        <div>
          <label>Shift Availability:</label>
          <span>{{ itemizeArray(model.general.fields.availabilityType) }}</span>
        </div>
        <div>
          <label>Are you currently on "lay-off" status and subject to recall?</label>
          <span>{{ convertYesNo(model.general.fields.onLayoff) }}</span>
        </div>
        <div>
          <label>Can you travel if a job requires it?</label>
          <span>{{ convertYesNo(model.general.fields.canTravel) }}</span>
        </div>
      </section>

      <section>
        <h5>Education</h5>


        <h6>Elementary School</h6>
        <div>
          <span>{{ model.education.fields.elementary.schoolName || 'Not Answered' }}</span>
          <span v-if="model.education.fields.elementary.schoolAddress">
            {{ model.education.fields.elementary.schoolAddress }}
          </span>
          <span v-if="model.education.fields.elementary.courseOfStudy">
            {{ model.education.fields.elementary.courseOfStudy }}
          </span>
          <span v-if="model.education.fields.elementary.yearsCompleted">
            {{ model.education.fields.elementary.yearsCompleted }} years completed
          </span>
          <span v-if="model.education.fields.elementary.degree">
            {{ model.education.fields.elementary.degree }}
          </span>
        </div>

        <h6>High School</h6>
        <div>
          <span>{{ model.education.fields.highSchool.schoolName || 'Not Answered' }}</span>
          <span v-if="model.education.fields.highSchool.schoolAddress">
            {{ model.education.fields.highSchool.schoolAddress }}
          </span>
          <span v-if="model.education.fields.highSchool.courseOfStudy">
            {{ model.education.fields.highSchool.courseOfStudy }}
          </span>
          <span v-if="model.education.fields.highSchool.yearsCompleted">
            {{ model.education.fields.highSchool.yearsCompleted }} years completed
          </span>
          <span v-if="model.education.fields.highSchool.degree">
            {{ model.education.fields.highSchool.degree }}
          </span>
        </div>

        <h6>Undergraduate College</h6>
        <div>
          <span>{{ model.education.fields.undergraduate.schoolName || 'Not Answered' }}</span>
          <span v-if="model.education.fields.undergraduate.schoolAddress">
            {{ model.education.fields.undergraduate.schoolAddress }}
          </span>
          <span v-if="model.education.fields.undergraduate.courseOfStudy">
            {{ model.education.fields.undergraduate.courseOfStudy }}
          </span>
          <span v-if="model.education.fields.undergraduate.yearsCompleted">
            {{ model.education.fields.undergraduate.yearsCompleted }} years completed
          </span>
          <span v-if="model.education.fields.undergraduate.degree">
            {{ model.education.fields.undergraduate.degree }}
          </span>
        </div>

        <h6>Graduate Professional</h6>
        <div>
          <span>{{ model.education.fields.graduate.schoolName || 'Not Answered' }}</span>
          <span v-if="model.education.fields.graduate.schoolAddress">
            {{ model.education.fields.graduate.schoolAddress }}
          </span>
          <span v-if="model.education.fields.graduate.courseOfStudy">
            {{ model.education.fields.graduate.courseOfStudy }}
          </span>
          <span v-if="model.education.fields.graduate.yearsCompleted">
            {{ model.education.fields.graduate.yearsCompleted }} years completed
          </span>
          <span v-if="model.education.fields.graduate.degree">
            {{ model.education.fields.graduate.degree }}
          </span>
        </div>

        <h6>Other</h6>
        <div>
          <span>{{ model.education.fields.other.schoolName || 'Not Answered' }}</span>
          <span v-if="model.education.fields.other.schoolAddress">
            {{ model.education.fields.other.schoolAddress }}
          </span>
          <span v-if="model.education.fields.other.courseOfStudy">
            {{ model.education.fields.other.courseOfStudy }}
          </span>
          <span v-if="model.education.fields.other.yearsCompleted">
            {{ model.education.fields.other.yearsCompleted }} years completed
          </span>
          <span v-if="model.education.fields.other.degree">
            {{ model.education.fields.other.degree }}
          </span>
        </div>
        <div>
          <label>Describe any specialized training, apprenticeship, skills and extra-curricular activities:</label>
          <span>{{ model.education.fields.training || 'Not Answered' }}</span>
        </div>
        <div>
          <label>Describe any job-related training received in the United States military:</label>
          <span>{{ model.education.fields.militaryTraining || 'Not Answered' }}</span>
        </div>
      </section>

      <section>
        <h5>Employment Experience</h5>

        <div v-for="(job, index) in model.employment.fields.jobs">
          <h6>Past Employment #{{ index + 1 }}</h6>
          <div>
            <label>Employer</label>
            <span>{{ job.employer || 'Not Answered' }}</span>
            <span v-if="job.address">
              {{ job.address }}
            </span>
            <span v-if="job.telephone">
              {{ job.telephone }}
            </span>
            <span v-if="job.datesEmployedStart">
              {{ job.datesEmployedStart || 'Not Answered' }} to {{ job.datesEmployedEnd || 'Not Answered' }}
            </span>
            <span v-if="job.hourlyRateStarting">
              {{ job.hourlyRateStarting }} - {{ job.hourlyRateFinal }}
            </span>
          </div>
          <div>
            <label>Job Title:</label>
            <span>{{ job.jobTitle || 'Not Answered' }}</span>
          </div>
          <div>
            <label>Supervisor:</label>
            <span>{{ job.supervisor || 'Not Answered' }}</span>
          </div>
          <div>
            <label>Reason for Leaving:</label>
            <span>{{ job.reasonForLeaving || 'Not Answered' }}</span>
          </div>
          <div>
            <label>Work Performed:</label>
            <span>{{ job.workPerformed || 'Not Answered' }}</span>
          </div>
        </div>
        <div>
          <label>List professional, trade, business or civic activities and offices held:</label>
          <span>{{ model.employment.fields.activitiesAndOffice || 'Not Answered' }}</span>
        </div>
      </section>

      <section>
        <h5>Additional Information</h5>


        <div>
          <label>Summarize special job-related skills and qualifications acquired from employment or other experience:</label>
          <span>{{ model.additional.fields.otherQualifications || 'Not Answered' }}</span>
        </div>
        <div>
          <label>Specialized Skills:</label>
          <span>{{ itemizeArray(model.additional.fields.officeSkills) }}</span>
        </div>
        <div>
          <label>Production/Mobile Machinery:</label>
          <span>{{ itemizeArray(model.additional.fields.machineryList) }}</span>
        </div>
        <div>
          <label>Other:</label>
          <span>{{ itemizeArray(model.additional.fields.otherList) }}</span>
        </div>
        <div>
          <label>State any additional information you feel may be helpful to us in considering your application:</label>
          <span>{{ model.additional.fields.additionalInformation || 'Not Answered' }}</span>
        </div>
        <div>
          <label>Are you capable of performing in a reasonable manner; with or without a reasonable accommodation, the activities involved in the job or occupation for which you have applied:</label>
          <span>{{ convertYesNo(model.additional.fields.isCapable) }}</span>
        </div>

        <div>
          <label>Reference #1:</label>
          <span>{{ model.additional.fields.references[0].name || 'Not Answered' }}</span>
          <span v-if="model.additional.fields.references[0].phone">
            {{ model.additional.fields.references[0].phone }}
          </span>
          <span v-if="model.additional.fields.references[0].address">
            {{ model.additional.fields.references[0].address }}
          </span>
        </div>
        <div>
          <label>Reference #2:</label>
          <span>{{ model.additional.fields.references[1].name || 'Not Answered' }}</span>
          <span v-if="model.additional.fields.references[1].phone">
            {{ model.additional.fields.references[1].phone }}
          </span>
          <span v-if="model.additional.fields.references[1].address">
            {{ model.additional.fields.references[1].address }}
          </span>
        </div>
        <div>
          <label>Reference #3:</label>
          <span>{{ model.additional.fields.references[2].name || 'Not Answered' }}</span>
          <span v-if="model.additional.fields.references[2].phone">
            {{ model.additional.fields.references[2].phone }}
          </span>
          <span v-if="model.additional.fields.references[2].address">
            {{ model.additional.fields.references[2].address }}
          </span>
        </div>
      </section>

      <section>
        <h5>Applicant's Statement</h5>


        <div>
          <label>Signature:</label>
          <span>{{ model.statement.fields.signature || 'Not Answered' }}</span>
        </div>
        <div>
          <label>Date:</label>
          <span>{{ model.statement.fields.date || 'Not Answered' }}</span>
        </div>
      </section>
    </div>

    <!-- Application Summary Blocks -->
    <v-layout row wrap>
      <v-flex>
        <div v-html="applicationReviewHtml"></div>
      </v-flex>
    </v-layout>

  </v-form>
</template>

<script>
  export default {
    name: 'job-application-review-form',

    /**
     * Props
     */
    props: {
      model: {
        type: Object,
        required: true,
      },
    },

    /**
     * Data Properties
     */
    data() {
      return {
        valid: true,
        submitMessageState: true,
        applicationReviewHtml: '',
      };
    },

    /**
     * Methods
     */
    methods: {
      convertYesNo(value) {
        if (value === 'Y') {
          return 'Yes';
        } else if (value === 'N') {
          return 'No';
        }

        return 'Not Answered';
      },

      itemizeArray(array) {
        if (array.length < 1) {
          return 'Not Answered';
        }

        return array.join(', ');
      },
    },

    /**
     * Lifecycle Hooks
     */
    created() {},
  };
</script>

<style scoped>
  .jas-instructions-message {
    font-size: 120%;
    color: black;
    margin-bottom: 15px;
  }

  #ReviewHtml label {
    display: block;
    font-weight: bold;
    color: #888888;
  }

  #ReviewHtml span {
    display: block;
    color: #3D3D3D;
  }

  #ReviewHtml > section {
    margin-top: 15px;
  }

  #ReviewHtml > section > div,
  #ReviewHtml > section > div > div {
    margin-bottom: 10px;
  }
</style>
