import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

import { login, request } from './api';
import { cleanUser } from './login';

Vue.config.productionTip = false;

new Vue({
    router,
    vuetify,
    render: h => h(App),
    data: () => ({
        date: new Date().toISOString().substr(0, 10),
        menu: false,
        modal: false,
        menu2: false,
        dialog: false,
    }),
    methods: {
        async $login(email, password) {
            await login(email, password);
            this.$root.$emit('chlogin');
        },
        async $logout() {
            cleanUser();
            this.$root.$emit('chlogin');
        },

        /**
         * Chama uma função REST da api
         * @param {string} restFn função rest a ser executada. ex.: 'login', 'user/new'
         * @param {object} body corpo da requisição
         */
        async $request(restFn, body) {
            try {
                return await request(restFn, body);
            } catch (err) {
                if (err.status === 401) {
                    this.$root.$logout();
                }
                throw err;
            }
        },
    },
}).$mount('#app');
