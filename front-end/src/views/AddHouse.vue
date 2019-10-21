<template>
    <div id="app">
        <v-app id="inspire">
            <h3 class="display-1 font-weight-bold">
                <v-row justify="center">
                    <v-flex xs12>
                        <v-img
                            :src="require('../assets/logo.png')"
                            class="my-3"
                            contain
                            height="200"
                        ></v-img>
                    </v-flex>
                    Adicionar Casa
                </v-row>
            </h3>
            <p></p>
            <form>
                <v-row justify="center">
                    <v-col cols="4">
                        <v-text-field
                            label="Nome da casa"
                            prepend-icon="mdi-home"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="4">
                        <v-text-field
                            label="Descrição da casa"
                            prepend-icon="mdi-alphabetical"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                </v-row>
                <v-col cols="32" sm="36" md="34">
                    <v-card-actions class="justify-center">
                        <v-btn primary>
                            Registrar
                        </v-btn>
                    </v-card-actions>
                    <v-card-actions class="justify-center">
                        <v-btn primary color="success" to="/manage">
                            Voltar
                        </v-btn>
                    </v-card-actions>
                </v-col>
            </form>
        </v-app>
    </div>
</template>
