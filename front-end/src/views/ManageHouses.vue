<template>
  <v-item-group>
    <v-container>
      <v-row>
        <v-col
          v-for="n in 2"
          :key="n"
          cols="12"
          md="4"
        >
          <v-item v-slot:default="{ active, toggle }">
                <v-card
                    class="mx-auto"
                    max-width="450"
                >
                    <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
                    :aspect-ratio="16/9"
                    >

                    </v-img>
                    <v-card-title>
                    <div class="display-1 mb-2">Casa do Jorge ADM</div>
                    <div class="title font-weight-regular grey--text">Uma casa da pesada,e os moradores entram em várias encrencas</div>
                    </v-card-title>

                    <v-divider class="mt-6 mx-4"></v-divider>

                    <v-card-text align="center">
                    <v-chip
                        class="mr-3 ml"
                        @click="lights"
                    >
                        <v-icon left>mdi-brightness-5</v-icon>
                       Editar Casa
                    </v-chip>
                    <v-chip
                        class="mr-3"
                        @click="alarm"
                    >
                        <v-icon left>mdi-delete</v-icon>
                        Deletar Casa
                    </v-chip>
                    </v-card-text>
                </v-card>


          </v-item>
        </v-col>

      </v-row>

    </v-container>
    <v-row justify="center">
    <v-btn color="success" fab x-large dark>
        <v-icon>mdi-plus</v-icon>
    </v-btn>
    </v-row>
  </v-item-group>
</template>
