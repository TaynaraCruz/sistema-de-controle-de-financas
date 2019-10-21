import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/LoginPage.vue';
import Profile from './views/Profile.vue';
import SignUp from './components/SignUp.vue';
import ManageHouses from './views/ManageHouses.vue';
import RegisterPayment from './views/RegisterPayment.vue';
import NewExpense from './views/NewExpense.vue';
import AddUser from './views/AddUser.vue';
import Statistics from './views/Statistics.vue';
import Members from './views/Members.vue';
import About from './views/About.vue';
import House from './views/House.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile,
        },
        {
            path: '/SignUp',
            name: 'Signup',
            component: SignUp,
        },
        {
            path: '/about',
            name: 'about',
            component: About,
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            //component: () =>
            // import(/* webpackChunkName: "about" */ "./views/About.vue")
        },
        {
            path: '/manage',
            name: 'manage',
            component: ManageHouses,
        },
        {
            path: '/payment',
            name: 'payment',
            component: RegisterPayment,
        },
        {
            path: '/newexpense',
            name: 'newexpense',
            component: NewExpense,
        },
        {
            path: '/adduser',
            name: 'adduser',
            component: AddUser,
        },
        {
            path: '/statistics',
            name: 'statistics',
            component: Statistics,
        },
        {
            path: '/members',
            name: 'members',
            component: Members,
        },
        {
            path: '/house',
            name: 'house',
            component: House,
        },
    ],
});
