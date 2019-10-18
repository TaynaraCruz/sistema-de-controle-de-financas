<template>
<div id="app">
  <v-app id="inspire">    
    <h3 class="display-1 font-weight-bold">
      <v-row  justify="center">
        <v-flex xs12>
                <v-img :src="require('../assets/logo.png')" class="my-3" contain height="200"></v-img>
            </v-flex>
        Registrar Pagamento
      </v-row>
    </h3>
    <form>
      <v-row  justify="center"> 
        <v-col cols="4">
          <v-text-field
            label="Membro"
            prepend-icon="mdi-account-check"
          ></v-text-field>
        </v-col>
      </v-row>
    <v-row>
      <v-col cols="12" sm="6" md="4">
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <v-date-picker v-model="date" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" sm="6" md="4">
        <v-dialog
          ref="dialog"
          v-model="modal"
          :return-value.sync="date"
          persistent
          width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="date"
              label="Escolha a data do pagamento:"
              prepend-icon="mdi-calendar"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
          </v-date-picker>
        </v-dialog>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
        </v-menu>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-col cols="32" sm="36" md="34">
      <v-card-actions class="justify-center">
        <v-btn primary>
          Registrar
        </v-btn>
      </v-card-actions>
    </v-col>  
     </form>
     
  </v-app>
</div>
</template>
