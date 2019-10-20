<template>
    <v-container>
        <v-layout text-center wrap>
            <v-flex xs12>
                <v-img :src="require('../assets/logo.png')" class="my-3" contain height="200"></v-img>
            </v-flex>

            <v-flex mb-4>
                <h1 class="display-2 font-weight-bold">
                    Bem-vindo ao Housefly!
                </h1>
                <br>
                <br>
                <div class="mb-3">Compartilhe despesas, administre as finanças de múltiplas casas e organize seus gastos. <br>O sistema do Housefly é inteiramente gratuito e, ao criar uma conta, os usuários tem acesso a todas as funcionalidades. <br><br><strong>Aproveitem!</strong><small></small></div>
                <br>
                <p class="subheading font-weight-regular">
                    <br>
                    <v-btn round :href="`https://twitter.com/intent/tweet?text=Estou usando Housefly para administrar meus gastos, chega de boleto atrasado lá em casa! Acesse também em !`" color="blue" dark target="_blank">Compartilhar no Twitter</v-btn>
                    
                    <br>
                    <br>
                    

                    <v-carousel :show-arrows="false" height="800px" width="100px">
                        <v-carousel-item 
                            v-for="(item,i) in items"
                            :key="i"
                            :src="item.src"
                        ></v-carousel-item>
                    </v-carousel>
      
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
         data () {
    return {
      items: [
        {
          src: require('../assets/tela3.png'),
        },
        {
          src: require('../assets/tela4.png'),
        },
      ],
    }
  },
    };

</script>
