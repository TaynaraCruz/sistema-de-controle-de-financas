<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" app clipped>
            <v-list dense>
                <v-list-item :to="link.to" v-for="link in links" :key="link.to">
                    <v-list-item-action>
                        <v-icon>{{link.icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{link.text}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app clipped-left>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>お金師団</v-toolbar-title>
            <div class="flex-grow-1"></div>
            <v-btn icon @click="invertColors">
                <v-icon>mdi-invert-colors</v-icon>
            </v-btn>
        </v-app-bar>

        <v-content>
            <transition name="fade" mode="out-in">
                <router-view />
            </transition>
        </v-content>

        <v-footer app absolute class="font-weight-medium">
            <v-col class="text-center" cols="12">
                {{ new Date().getFullYear() }} — <a class="footer-a" href="https://011235.xyz" target="_blank"><strong>お金師団</strong></a>
            </v-col>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    data: () => ({
        drawer: null,
        links: [{
            to: '/',
            icon: 'mdi-home',
            text: 'Teste',
        }, {
            to: '/estatisticas',
            icon: 'mdi-chart-areaspline',
            text: 'Estatísticas',
        }, {
            to: '/herois',
            icon: 'mdi-account',
            text: 'Heróis',
        }, {
            to: '/sobre',
            icon: 'mdi-star',
            text: 'Sobre',
        }]
    }),
    methods: {
        invertColors() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
            window.localStorage.light = ''+!this.$vuetify.theme.dark;
        },
    },
    created () {
        if (window.localStorage.light === 'true') {
            this.$vuetify.theme.dark = false;
        }
    },
}
</script>

<style scoped>
    .fade-leave-active,
    .fade-enter-active {
        transition: 0.25s;
    }

    .fade-enter,
    .fade-leave-to {
        transform: translateY(3vh);
        opacity: 0;
    }

    .footer-a {
        color: inherit;
        text-decoration: none;
    }
    .footer-a:hover {
        text-decoration: underline;
    }
</style>
