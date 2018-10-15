<template>
  <app-card>
    <h2 slot="title">Applicant's Agreement</h2>
    <p>
      I certify that answers given herein are true and complete.
      I authorize investigation of all statements contained in this application for employment as may be necessary in arriving at an employment decision.
      This application for employment shall be considered active for a period of time not to exceed 45 days. Any applicant wishing to be considered for employment beyond this time period should inquire as to whether or not applications are being accepted at that time.
      I hereby understand and acknowledge that, unless otherwise defined by applicable law, any employment relationship with this organization is of an "at will" nature, which means that the Employee may resign at any time and the Employer may discharge Employee at any time with or without cause. It is further understood that this "at will" employment relationship may not be changed by any written document or by conduct unless such change is specifically acknowledged in writing by an authorized executive of this organization.
      In the event of employment, I understand that false or misleading information given in my application or interview(s) may result in discharge. In understand, also, that I am required to abide by all rules and regulations of the employer. 
    </p>
  </app-card>
</template>

<script>
import Card from "../../shared/Card.vue";

export default {
  components: {
    appCard: Card,
  }
};
</script>

<style>
</style>
