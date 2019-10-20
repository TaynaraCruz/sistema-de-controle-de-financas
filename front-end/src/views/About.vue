

<template>
    <v-container>
        <v-layout text-center wrap>
            <v-flex xs12>
                <v-img :src="require('../assets/logo.png')" class="my-3" contain height="200"></v-img>
            </v-flex>

            <v-flex mb-4>
                <h3 class="display-1 font-weight-bold">
                    Sobre o Housefly
                </h3>
                <br>
                <br>
                <div class="mb-3">Este projeto é uma colaboração de alunos da classe de Engenharia de Software de 2019 da UFMG. <br>Nosso sistema disponibiliza um ambiente online para administrar contas e finanças de uma ou mais casas dentre diferentes usuários. <br><small></small></div>
                
                <p class="subheading font-weight-regular">
                    <br>
                <h3 class="display-1 font-italic">
                    Conheça os desenvolvedores:
                </h3>
                <br>
                <v-row  justify="center">
                  <v-card
                    color="#404040"
                    dark
                    height="50%"
                    width="35%"
                  >
                    <v-card-title class="headline justify-center"> <v-img :src="require('../assets/about2.png')" class="my-3" contain height="200"></v-img> João Gabriel de Oliveira Bicalho</v-card-title>
                  </v-card>
                </v-row>
                <br>
                <v-row  justify="center">
                  <v-card
                    color="#404040"
                    dark
                    height="50%"
                    width="35%"
                  >
                    <v-card-title class="headline justify-center"> <v-img :src="require('../assets/about3.png')" class="my-3" contain height="200"></v-img> João Victor Campos Teixeira</v-card-title>
                  </v-card>
                </v-row>
                <br>
                <v-row  justify="center">
                  <v-card
                    color="#404040"
                    dark
                    height="50%"
                    width="35%"
                  >
                    <v-card-title class="headline justify-center"> <v-img :src="require('../assets/about5.png')" class="my-3" contain height="200"></v-img> José Carlos de Oliveira Júnior</v-card-title>
                  </v-card>
                </v-row>
                <br>
                <v-row  justify="center">
                  <v-card
                    color="#404040"
                    dark
                    height="50%"
                    width="35%"
                  >
                    <v-card-title class="headline justify-center"> <v-img :src="require('../assets/about1.png')" class="my-3" contain height="200"></v-img> Larissa Gomes Malagoli</v-card-title>
                  </v-card>
                </v-row>
                <br>
                <v-row  justify="center">
                  <v-card
                    color="#404040"
                    dark
                    height="50%"
                    width="35%"
                  >
                    <v-card-title class="headline justify-center"> <v-img :src="require('../assets/about4.png')" class="my-3" contain height="200"></v-img> Taynara Lorraine Marcelino da Cruz</v-card-title>
                  </v-card>
                </v-row>
                <br>
            </v-flex>
        </v-layout>
    </v-container>
</template>
