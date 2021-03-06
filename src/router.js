import Vue from "vue";
import Router from "vue-router";

import JobApp from "./views/JobApp.vue";
import JobAppStep1 from "./components/JobApp/Step1/Step1.vue";
import JobAppStep2 from "./components/JobApp/Step2/Step2.vue";
import JobAppStep3 from "./components/JobApp/Step3/Step3.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/job-application",
      name: "jobapp",
      component: JobApp,
      alias: [
        "/job-application/general",
        "/job-application/education",
        "/job-application/employment",
        "/job-application/additional",
        "/job-application/statement",
        "/job-application/review",
        "/job-application/submitted"
      ],
      children: [
        {
          path: "step1",
          name: "step1",
          component: JobAppStep1
        },
        {
          path: "step2",
          name: "step2",
          component: JobAppStep2
        },
        {
          path: "step3",
          name: "step3",
          component: JobAppStep3
        }
      ]
    }
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ]
});
