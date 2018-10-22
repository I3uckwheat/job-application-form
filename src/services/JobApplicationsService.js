import api from './api';
import store from './../store/store';

export default {
  get(id, token) {
    return api.get(
      `/job-applications/${id}?accessToken=${token}`,
    );
  },

  create(applicationData) {
    return api.post(
      '/job-applications',
      {
        applicationData,
      },
    );
  },

  createNotification() {
    const formData = JSON.parse(localStorage.trJobApplication);

    return api.post(
      '/send-job-application-created-email',
      {
        name: `${formData.general.fields.firstName} ${formData.general.fields.lastName}`,
        email: formData.general.fields.emailAddress,
        phone: formData.general.fields.primaryPhone,
      },
    );
  },
};
