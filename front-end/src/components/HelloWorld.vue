<template>
    <v-container>
        <v-layout text-center wrap>
            <v-flex xs12>
                <v-img :src="require('../assets/logo.png')" class="my-3" contain height="200"></v-img>
            </v-flex>

            <v-flex mb-4>
                <h1 class="display-2 font-weight-bold">
                    Houseflyへようこそ！
                </h1>
                <div class="mb-3"><small>Bem-vindo ao Housefly!</small></div>
                <br>
                <p class="subheading font-weight-regular">
                    このプロジェクトは、UFMGの2019ソフトウェアエンジニアリングクラスの学生のコラボレーションです。
                    <br>
                    <small>Este projeto é uma colaboração de alunos da classe de Engenharia de Software de 2019 da UFMG.</small>
                    <br>
                    <br>
                    当社のシステムは、異なるユーザー間で1つ以上の家のアカウントと財務を管理するためのオンライン環境を提供します。 お楽しみください！
                    <br>
                    <small>Nosso sistema disponibiliza um ambiente online para administrar contas e finanças de uma ou mais casas dentre diferentes usuários. Aproveitem!</small>

                </p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            ecosystem: [{
                    text: 'vuetify-loader',
                    href: 'https://github.com/vuetifyjs/vuetify-loader',
                },
                {
                    text: 'github',
                    href: 'https://github.com/vuetifyjs/vuetify',
                },
                {
                    text: 'awesome-vuetify',
                    href: 'https://github.com/vuetifyjs/awesome-vuetify',
                },
            ],
            importantLinks: [{
                    text: 'Documentation',
                    href: 'https://vuetifyjs.com',
                },
                {
                    text: 'Chat',
                    href: 'https://community.vuetifyjs.com',
                },
                {
                    text: 'Made with Vuetify',
                    href: 'https://madewithvuejs.com/vuetify',
                },
                {
                    text: 'Twitter',
                    href: 'https://twitter.com/vuetifyjs',
                },
                {
                    text: 'Articles',
                    href: 'https://medium.com/vuetify',
                },
            ],
            whatsNext: [{
                    text: 'Explore components',
                    href: 'https://vuetifyjs.com/components/api-explorer',
                },
                {
                    text: 'Select a layout',
                    href: 'https://vuetifyjs.com/layout/pre-defined',
                },
                {
                    text: 'Frequently Asked Questions',
                    href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
                },
            ],
        }),
    };

</script>
