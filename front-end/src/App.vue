<template>
    <v-app>
        <v-toolbar :color="`${$route.meta.color || 'green'} darken-2`" dark app>
            <v-toolbar-title class="">
                <h1>Housefly</h1>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn flat exact v-for="link in links" :key="link.to" :to="link.to">
                    <v-icon class="hidden-md-and-up">{{link.icon}}</v-icon>
                    <span class="hidden-sm-and-down">{{link.text}}</span>
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>

        <v-content>
            <transition name="fade" mode="out-in">
                <router-view/>
            </transition>
        </v-content>

        <our-footer />
    </v-app>
</template>

<script>
    import OurFooter from './components/OurFooter';
    export default {
        name: 'App',
        components: {
            OurFooter
        },
        data() {
            return {
                links: [{
                    to: '/',
                    icon: 'home',
                    text: 'Teste',
                },{
                    to: '/estatisticas',
                    icon: 'timeline',
                    text: 'Estatísticas',
                },{
                    to: '/herois',
                    icon: 'person',
                    text: 'Heróis',
                },{
                    to: '/sobre',
                    icon: 'star',
                    text: 'Sobre',
                }]
            }
        }
    }
</script>

<style scoped>
    @media screen and (max-width: 960px) {
        .v-btn {
            min-width: 0;
        }
        .v-btn__content {
            padding: 0;
        }
    }
    .fade-leave-active,
    .fade-enter-active {
        transition: 0.25s;
    }
    .fade-enter,
    .fade-leave-to {
        transform: translateY(10vh);
        opacity: 0;
    }
    .v-content {
        background-color: #696969;
    }
</style>