export const state = {
  required: v => !!v || "Field is required",

  numeric: v => !v || (!isNaN(v) && isFinite(v)) || "Must be numeric",

  min(length) {
    return v =>
      !v || v.length >= length || `Must be at least ${length} characters`;
  },

  max(length) {
    return v =>
      !v || v.length <= length || `Must be no more than ${length} characters`;
  },

  digits(length) {
    return v =>
      !v ||
      (v.length === length && /^\d+$/.test(v)) ||
      `Must be a ${length}-digit numeric`;
  },

  email() {
    return v =>
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
      "E-mail must be valid";
  }
};

export const getters = {
  // currentView: state => {
  //   return state.currentView;
  // },
};
