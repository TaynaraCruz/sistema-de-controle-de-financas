import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/LoginPage.vue";
import Profile from "./views/Profile.vue";
import SignUp from "./components/SignUp.vue";
import ManageHouses from "./views/ManageHouses.vue";
import RegisterPayment from "./views/RegisterPayment.vue";
import NewExpense from "./views/NewExpense.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
    },
    {
      path: "/SignUp",
      name: "Signup",
      component: SignUp,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }, 
    {
      path: "/manage",
      name: "manage",
      component: ManageHouses,
    },
    {
      path: "/payment",
      name: "payment",
      component: RegisterPayment,
    },
    {
      path: "/newexpense",
      name: "newexpense",
      component: RegisterPayment,
    },
  ]
});
