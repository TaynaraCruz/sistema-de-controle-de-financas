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
                            v-model="name"
                            label="Nome da casa"
                            prepend-icon="mdi-home"
                            required
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                </v-row>
                <v-col cols="32" sm="36" md="34">
                    <v-card-actions class="justify-center" @click="addHouse">
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
            <p :v-if="error">{{error}}</p>
        </v-app>
    </div>
</template>

<script>
import { getUser } from '../login';
export default {
    props: {
        source: String,
    },
    data: () => ({
        drawer: null,
        name: '',
        error: '',
    }),
    methods: {
        async addHouse(){
            try {
                this.error = '';
                await this.$root.$request('house/new', {
                    name: this.name,
                });
                alert("Casa criada com sucesso");
                this.$router.push('/manage');
                
            } catch (err) {
                this.error = err.error;
                console.log(err)
            }
        }
    },
};
</script>