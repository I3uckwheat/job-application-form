export default {
  methods: {
    existsRule(fieldName) {
      return [v => !!v || `${fieldName} is required`];
    }
  }
};
