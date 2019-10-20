<template>
<div id="app">
  <v-app id="inspire">    
    <h3 class="display-1 font-weight-bold">
      <v-row  justify="center">
        <v-flex xs12>
                <v-img :src="require('../assets/logo.png')" class="my-3" contain height="200"></v-img>
            </v-flex>
        Membros
      </v-row>
    </h3>
    <p> </p>
    <p class="text-center"> Estes são os membros atuais da casa em questão:</p>
    <form>
      <v-row  justify="center">
        <v-card
          color="#404040"
          dark
          height="50%"
          width="20%"
        >
          <v-card-title class="headline justify-center"> ♛ Membro 1</v-card-title>
        </v-card>
      </v-row>
    <br>
    <v-row  justify="center">
        <v-card
          color="#404040"
          dark
          height="50%"
          width="20%"
        >
          <v-card-title class="headline justify-center"> ★ Membro 2</v-card-title>
        </v-card>
      </v-row>
    <br>
    <v-row  justify="center">
        <v-card
          color="#404040"
          dark
          height="50%"
          width="20%"
        >
          <v-card-title class="headline justify-center"> ★ Membro 3</v-card-title>
        </v-card>
      </v-row>
    <br>
    <v-row>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    </v-row>
    <br>
    <br>
    <div class="text-center">
    <v-col cols="32" sm="36" md="34">
      <v-layout row wrap class="justify-center">
      <v-card-actions>
        <v-btn primary color="success">
          Voltar
        </v-btn>
      </v-card-actions>
      <v-card-actions class="justify-center">
        <v-btn primary color="warning" to="/payment"> 
          Registrar Pagamento
        </v-btn>
      </v-card-actions>
      <v-card-actions class="justify-right">
        <v-btn primary color="info" to="/adduser">
          Adicionar Membro
        </v-btn>
      </v-card-actions>
       </v-layout>  
    </v-col> 
    </div> 
     </form>
     
  </v-app>
</div>
</template>
