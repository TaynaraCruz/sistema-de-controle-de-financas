import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

import { login } from './api';
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
            this.$root.emit('chlogin');
        },
        async $logout() {
            cleanUser();
            this.$root.emit('chlogin');
        },
    },
}).$mount('#app');
