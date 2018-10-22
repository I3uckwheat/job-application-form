<template>
  <v-switch 
    :label="'Advanced Form'" 
    v-model="buttonStatus"
    @change="switchFormType()"
    class="mx-3"
  ></v-switch>
</template>

<script>
export default {
  data() {
    return {
      buttonStatus: false
    };
  },
  created() {
    this.buttonStatus = this.isAdvanced;
  },
  methods: {
    switchFormType() {
      if (this.isAdvanced) {
        this.$router.push({
          path: "/job-application/step1"
        });
      } else {
        this.$router.push({
          path: "/job-application/general",
          query: {
            form: "advanced"
          }
        });
      }
    }
  },
  computed: {
    isAdvanced() {
      return this.$route.query.form === "advanced";
    }
  }
};
</script>

<style>
</style>
