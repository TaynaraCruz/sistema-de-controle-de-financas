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
              :color="active ? 'primary' : ''"
              class="display-3 flex-grow-1 text-center"
              dark
              height="400"
              @click="toggle"
            >
            <v-card-text class="text-center title">Casa X</v-card-text>
              <v-scroll-y-transition>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
            <v-card
                color= 'green'
                class="display-3 flex-grow-1 text-center"
                dark
                height="400"
            >
           <v-card-text class="text-center title">Adicionar Nova Casa</v-card-text>
            </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>