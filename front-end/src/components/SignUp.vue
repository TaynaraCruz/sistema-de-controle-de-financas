<template>
<div id="app">
  <v-app id="inspire">
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Nome"
        required
      ></v-text-field>
  
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="value"
        :rules="valueRules"
        label="Renda"
        prefix="R$"
        required
      ></v-text-field> 
  
      <v-text-field
        v-model="senha"
        :rules="senha"
        label="Senha"
        required
      ></v-text-field>

      <v-text-field
        v-model="confirmar_senha"
        :rules="confirmar_senha"
        label="Confirmar a Senha"
        required
      ></v-text-field>
  
      <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Você concorda com os termos de uso?"
        required
        v-on="on"
      ></v-checkbox>

      <v-dialog
        v-model="dialog"
        width="500"
      >
        <template v-slot:activator="{ on }">
          <v-btn
            color="blue"
            dark
            v-on="on"
          >
            Termos de uso
          </v-btn>
        </template>
  
        <v-card>
          <v-card-title
            class="headline blue lighten-1"
            primary-title
          >
            Termos de uso
          </v-card-title>
  
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br> Clique em qualquer lugar fora desta janela para fechá-la.
          </v-card-text>
  
          <v-divider></v-divider>
  
        </v-card>
      </v-dialog>
      <br>
      <br>
      <br>

      <v-btn
        color="success"
        class="mr-4"
        @click="validate"
      >
        Validate
      </v-btn>
  
      <v-btn
        color="error"
        class="mr-4"
        @click="reset"
      >
        Reset Form
      </v-btn>
  
    
    </v-form>
  </v-app>
</div>
</template>