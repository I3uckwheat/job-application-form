<template>
  <app-card>
    <h2 slot="title">Undergraduate College</h2>

      <template v-for="(school, index) in schools">
        <div :key="index" :class="{spaced: index !== schools.length - 1}">
          <v-layout row wrap justify-space-between> 
            <!-- Row One -->
            <v-flex xs12 sm6>
              <v-text-field
                label="School Name"
                v-model="schools[index].name">
              </v-text-field>
            </v-flex>

            <v-flex xs12 sm6>
              <v-text-field
                label="School Address"
                v-model="schools[index].address">
              </v-text-field>
            </v-flex>

            <!-- Row Two -->
            <v-flex xs12 sm5>
              <v-text-field
                label="Course of Study"
                v-model="schools[index].study">
              </v-text-field>
            </v-flex>

            <v-flex xs12 sm3>
              <v-text-field
                label="Years Completed"
                v-model="schools[index].years">
              </v-text-field>
            </v-flex>

            <v-flex xs12 sm4>
              <v-text-field
                label="Degree"
                v-model="schools[index].degree">
              </v-text-field>
            </v-flex>
          </v-layout>
        </div>
      </template>

      <app-add-block-button @click="addSchool">Add Another School</app-add-block-button>

  </app-card>
</template>

<script>
import Card from "../../shared/Card.vue";
import AddBlockButton from "../../shared/AddBlockButton.vue";

export default {
  data() {
    return {
      schools: []
    };
  },
  created() {
    this.addSchool();
  },
  methods: {
    addSchool() {
      this.schools.push({
        name: "",
        address: "",
        study: "",
        years: "",
        degree: ""
      });
    }
  },
  components: {
    appCard: Card,
    appAddBlockButton: AddBlockButton
  }
};
</script>

<style scoped>
.spaced {
  margin-bottom: 30px;
}
</style>
