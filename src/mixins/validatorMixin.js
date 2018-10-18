export default {
  methods: {
    existsRule(fieldName) {
      return [v => !!v || `${fieldName} is required`];
    }
  },
  data() {
    return {
      rules: {
        email: [
          ...this.existsRule("Email"),
          v => {
            // eslint-disable-next-line no-useless-escape
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return (
              re.test(String(v).toLowerCase()) || "Email Address is Invalid"
            );
          }
        ]
      }
    };
  }
};
