<template>
<v-dialog
  ref="dialog"
  v-model="modal"
  :return-value.sync="date"
  persistent
  lazy
  full-width
  width="290px"
>
  <v-text-field
    slot="activator"
    v-model="date"
    :label="label"
    prepend-icon="event"
    readonly
  ></v-text-field>
  <v-date-picker v-model="date" scrollable>
    <v-spacer></v-spacer>
    <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
    <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
  </v-date-picker>
</v-dialog>
</template>

<script>
export default {
  data() {
    return {
      modal: false,
      date: ''
    }
  },
  created() {
    this.date = this.value;
  },
  watch: {
    date() {
      this.$emit('input', this.date)  
    }
  },
  props: ["label", "value"],
}
</script>

<style>

</style>
