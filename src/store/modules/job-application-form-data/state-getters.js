export const state = {
  general: {
    id: 1,
    fields: {
      positions: "",
      applicationDate: "",
      learnedAboutUs: false,
      learnedAboutUsOther: "",
      lastName: "",
      firstName: "",
      middleName: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      primaryPhone: "",
      emailAddress: "",
      contactTime: "",
      hasWorkProof: "",
      hasFiledBefore: "",
      hasFiledBeforeDate: null,
      wasEmployedBefore: "",
      wasEmployedBeforeDate: null,
      isRelationEmployed: "",
      isCurrentlyEmployed: "",
      canContactEmployer: "",
      isEmploymentPrevented: "",
      dateAvailable: null,
      desiredSalary: "",
      availabilityType: [],
      fullTimeShifts: [],
      partTimeShifts: [],
      temporaryDateStart: null,
      temporaryDateEnd: null,
      onLayoff: "",
      canTravel: ""
    }
  },
  education: {
    id: 2,
    fields: {
      elementary: {
        schoolName: "",
        schoolAddress: "",
        courseOfStudy: "",
        yearsCompleted: "",
        degree: ""
      },
      highSchool: {
        schoolName: "",
        schoolAddress: "",
        courseOfStudy: "",
        yearsCompleted: "",
        degree: ""
      },
      undergraduate: {
        schoolName: "",
        schoolAddress: "",
        courseOfStudy: "",
        yearsCompleted: "",
        degree: ""
      },
      graduate: {
        schoolName: "",
        schoolAddress: "",
        courseOfStudy: "",
        yearsCompleted: "",
        degree: ""
      },
      other: {
        schoolName: "",
        schoolAddress: "",
        courseOfStudy: "",
        yearsCompleted: "",
        degree: ""
      },
      training: "",
      militaryTraining: ""
    }
  },
  employment: {
    id: 3,
    fields: {
      jobs: [
        {
          employer: "",
          address: "",
          telephone: "",
          jobTitle: "",
          supervisor: "",
          reasonForLeaving: "",
          datesEmployedStart: null,
          datesEmployedEnd: null,
          hourlyRateStarting: "",
          hourlyRateFinal: "",
          workPerformed: ""
        }
      ],
      activitiesAndOffice: ""
    }
  },
  additional: {
    id: 4,
    fields: {
      otherQualifications: "",
      officeSkills: [],
      typewriterWpm: "",
      shorthandWpm: "",
      machineryList: [],
      otherList: [],
      additionalInformation: "",
      isCapable: "",
      references: [
        {
          name: "",
          phone: "",
          address: ""
        },
        {
          name: "",
          phone: "",
          address: ""
        },
        {
          name: "",
          phone: "",
          address: ""
        }
      ]
    }
  },
  statement: {
    id: 5,
    fields: {
      signature: "",
      date: null
    }
  }
};

export const getters = {
  // currentView: state => {
  //   return state.currentView;
  // },
};
