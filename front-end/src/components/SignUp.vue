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
      ></v-checkbox>
  
      <v-btn
        :disabled="!valid"
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