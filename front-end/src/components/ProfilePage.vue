<template>
    <v-container>
        <v-row>
            <v-col class="align-center justify-center layout text-center">
                <v-avatar :color="color" :size="size">
                    <img v-if="img" src='' alt="avatar">
                    <span v-else>VJ</span>
                </v-avatar>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="align-center justify-center layout text-center">
                <span mt-2 :txtColor="txtColor" :txt-size="txtSize">
                    João Gabriel Oliveira Bicalho
                </span>
                <!--hard code NAO PODE-->
            </v-col>
        </v-row>
        <v-row>
            <v-col class="align-center justify-center layout text-center">
                <v-form ref="form" v-model="valid" :lazy-validation="lazy">
                    <v-text-field v-model="name" :rules="nameRules" label="Nome" required></v-text-field>

                    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                    <v-text-field v-model="email" :rules="emailRules" label="Renda" required></v-text-field>
                    <v-divider />
                    <v-text-field class="mt-4" v-model="senha" :rules="emailRules" placeholder="Não alterado"
                        label="Senha" required></v-text-field>
                    <transition name="fade" appear>
                        <v-text-field v-model="senha2" :rules="emailRules" v-if="senha" label="Confirmar senha"
                            required></v-text-field>
                    </transition>
                    <v-btn :disabled="false" color="success" class="mr-4" @click="validate">
                        Salvar
                    </v-btn>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                color: '#c4c4c4',
                size: 100,
                txtColor: "white",
                txtSize: 16,
                senha: ''
            };
        }
    }

</script>
<style scoped>
    .v-divider {
        margin: 0 auto;
        max-width: 97%;
    }

</style>
