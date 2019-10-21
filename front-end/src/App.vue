<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" app clipped>
            <v-list dense>
                <v-list-item :to="link.to" v-for="link in links" :key="link.to">
                    <v-list-item-action>
                        <v-icon>{{ link.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{ link.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app clipped-left>
            <v-app-bar-nav-icon
                @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
            <v-toolbar-title>Menu</v-toolbar-title>
            <div class="flex-grow-1"></div>
            <v-btn icon @click="invertColors">
                <v-icon>mdi-invert-colors</v-icon>
            </v-btn>
        </v-app-bar>

        <v-content class="fill-height">
            <transition name="fade" mode="out-in">
                <router-view />
            </transition>
        </v-content>
        <v-footer app absolute>
            <div class="text-center" style="width: 100%;">
                &copy; {{ new Date().getFullYear() }} —
                <strong>Alguns direitos reservados</strong
                ><a class="footer-a" href="https://011235.xyz" target="_blank"
                    ><strong></strong
                ></a>
            </div>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    data: () => ({
        drawer: null,
        links: [
            {
                to: '/',
                icon: 'mdi-home',
                text: 'Home',
            },
            {
                to: '/login',
                icon: 'mdi-account',
                text: 'Login',
            },
            {
                to: '/manage',
                icon: 'mdi-chart-areaspline',
                text: 'Gerenciar Casas',
            },
            {
                to: '/house',
                icon: 'mdi-castle',
                text: 'Casa - Página Geral',
            },
            {
                to: '/about',
                icon: 'mdi-star',
                text: 'Sobre',
            },
            {
                to: '/profile',
                icon: 'mdi-account',
                text: 'Perfil',
            },
            {
                to: '/payment',
                icon: 'mdi-coin',
                text: 'Registrar Pagamento',
            },
            {
                to: '/newexpense',
                icon: 'mdi-square-inc-cash',
                text: 'Nova Despesa',
            },
            {
                to: '/adduser',
                icon: 'mdi-account-multiple-plus',
                text: 'Adicionar Usuário',
            },
            {
                to: '/statistics',
                icon: 'mdi-chart-line',
                text: 'Histórico de Despesas',
            },
            {
                to: '/members',
                icon: 'mdi-account-multiple',
                text: 'Membros',
            },
        ],
    }),
    methods: {
        invertColors() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
            window.localStorage.light = '' + !this.$vuetify.theme.dark;
        },
    },
    created() {
        if (window.localStorage.light === 'true') {
            this.$vuetify.theme.dark = false;
        }
    },
};
</script>

<style>
.fade-leave-active,
.fade-enter-active {
    transition: 0.25s;
}

.fade-enter,
.fade-leave-to {
    transform: translateY(3vh);
    opacity: 0;
}
</style>

<style scoped>
.footer-a {
    color: inherit;
    text-decoration: none;
}
.footer-a:hover {
    text-decoration: underline;
}
</style>
