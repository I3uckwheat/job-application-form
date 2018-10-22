export const state = {
  steps: [
    {
      id: 1,
      label: "General Information",
      component: "job-application-general-form"
    },
    {
      id: 2,
      label: "Education",
      component: "job-application-education-form"
    },
    {
      id: 3,
      label: "Employment Experience",
      component: "job-application-employment-form"
    },
    {
      id: 4,
      label: "Additional Information",
      component: "job-application-additional-form"
    },
    {
      id: 5,
      label: "Applicant's Statement",
      component: "job-application-statement-form"
    }
  ]
};

export const getters = {
  // currentView: state => {
  //   return state.currentView;
  // },
};
