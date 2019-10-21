<template>
        <v-container class="fill-height" fluid>
            <v-layout text-center wrap>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="4">
                        <v-card class="elevation-12">
                            <v-toolbar color="greay darken-2" dark flat>
                                <v-toolbar-title class="text-center"
                                    >Login form</v-toolbar-title
                                >
                                <div class="flex-grow-1"></div>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field
                                        v-model="email"
                                        label="Email"
                                        prepend-icon="mdi-account"
                                        type="text"
                                    >
                                    </v-text-field>

                                    <v-text-field
                                        v-model="password"
                                        id="password"
                                        label="Password"
                                        prepend-icon="mdi-lock"
                                        type="password"
                                    ></v-text-field>
                                </v-form>
                                <p :v-if="error">{{error}}</p>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="success" to="/SignUp">
                                    SignUp
                                </v-btn>
                                <div class="flex-grow-1"></div>
                                <v-btn color="gray darken-2" @click="login">Login</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-layout>
        </v-container>
</template>

<script>
import { getUser } from '../login';
export default {
    props: {
        source: String,
    },
    data: () => ({
        drawer: null,
        email: '',
        password: '',
        error: '',
    }),
    methods: {
        async login() {
            this.error = '';
            try {
                await this.$root.$login(this.email, this.password);
            } catch (err) {
                this.error = err.error;
                console.log(err)
            }
        }
    },
    beforeCreate() {
        if (getUser()) {
            this.$router.replace('/');
        }
    }
};
</script>
