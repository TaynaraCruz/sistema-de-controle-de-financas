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
                                        label="Login"
                                        name="login"
                                        prepend-icon="mdi-account"
                                        type="text"
                                    >
                                    </v-text-field>

                                    <v-text-field
                                        id="password"
                                        label="Password"
                                        name="password"
                                        prepend-icon="mdi-lock"
                                        type="password"
                                    ></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="success" to="/SignUp">
                                    SignUp
                                </v-btn>
                                <div class="flex-grow-1"></div>
                                <v-btn color="gray darken-2">Login</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-layout>
        </v-container>
</template>

<script>
export default {
    props: {
        source: String,
    },
    data: () => ({
        drawer: null,
    }),
};
</script>
