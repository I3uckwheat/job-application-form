export const state = {
  steps: [
    {
      id: 1,
      label: "General Information",
      component: "job-application-general-form",
      routeAlias: "/job-application/general"
    },
    {
      id: 2,
      label: "Education",
      component: "job-application-education-form",
      routeAlias: "/job-application/education"
    },
    {
      id: 3,
      label: "Employment Experience",
      component: "job-application-employment-form",
      routeAlias: "/job-application/employment"
    },
    {
      id: 4,
      label: "Additional Information",
      component: "job-application-additional-form",
      routeAlias: "/job-application/additional"
    },
    {
      id: 5,
      label: "Applicant's Statement",
      component: "job-application-statement-form",
      routeAlias: "/job-application/statement"
    },
    {
      id: 6,
      label: "Review & Submit",
      component: "job-application-review-form",
      routeAlias: "/job-application/review"
    }
  ]
};

export const getters = {
  // currentView: state => {
  //   return state.currentView;
  // },
};
