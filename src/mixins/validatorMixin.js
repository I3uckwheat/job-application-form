export default {
  methods: {
    existsRule(fieldName) {
      console.log('test')
      return [v => !!v || `${fieldName} is required`];
    }
  }
}