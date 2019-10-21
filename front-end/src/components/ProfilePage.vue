<template>
    <v-container>
        <v-row>
            <v-col class="align-center justify-center text-center">
                <v-avatar :color="color" :size="size">
                    <img v-if="showImage" :src="imageURL" alt="avatar" />
                    <span v-else>VJ</span>
                </v-avatar>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="align-center justify-center text-center">
                <v-btn
                    color="secondary"
                    small="true"
                    @click.stop="dialog = true"
                >
                    Trocar Imagem</v-btn
                >
                <v-dialog v-model="dialog" max-width="600">
                    <v-card>
                        <v-card-title class="headline"
                            >Upload de Imagem</v-card-title
                        >

                        <v-card-text>
                            <v-container>
                                <v-file-input
                                    name="imagem de fundo"
                                    placeholder="Escolha uma foto"
                                    prepend-icon="mdi-camera"
                                    @input="changeImage"
                                >
                                </v-file-input>
                            </v-container>
                        </v-card-text>

                        <v-card-actions>
                            <div class="flex-grow-1"></div>

                            <v-btn
                                color="white darken-1"
                                text
                                @click="dialog = false"
                            >
                                Cancelar
                            </v-btn>

                            <v-btn
                                color="white darken-1"
                                text
                                @click="dialog = false"
                            >
                                Salvar
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="align-center justify-center text-center">
                <span mt-2 :txtColor="txtColor" :txt-size="txtSize">
                    {{ nome }}
                </span>
                <br />
                <span mt-2 :txtColor="txtColor" :txt-size="emailSize">
                    {{ email }}
                </span>
            </v-col>
        </v-row>
        <v-row justify="space-around">
            <v-col class="align-center justify-center text-center" sm="6">
                <v-form ref="form" v-model="valid" :lazy-validation="lazy">
                    <v-text-field
                        v-model="nome"
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
                        v-model="renda"
                        :rules="rendaRules"
                        label="Renda"
                        required
                    ></v-text-field>
                    <v-divider />
                    <v-text-field
                        class="mt-4"
                        v-model="senha"
                        placeholder="Não alterado"
                        label="Senha"
                        required
                    >
                    </v-text-field>
                    <transition name="fade" appear>
                        <v-text-field
                            v-model="senha2"
                            v-if="senha"
                            label="Confirmar senha"
                            required
                        ></v-text-field>
                    </transition>
                    <v-btn
                        :disabled="false"
                        color="success"
                        class="mr-4"
                        @click="validate"
                    >
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
            size: 150,
            txtColor: 'white',
            txtSize: 16,
            emailSize: 8,
            email: 'joao@lyndo.xyz',
            senha: '',
            renda: 'R$ 256,00',
            nome: 'João Gabriel de Oliveira Bicalho',
            showImage: true,
            imageURL: require('../assets/logo.png'),
            dialog: false,
        };
    },
};
</script>
<style scoped>
.v-divider {
    margin: 0 auto;
    max-width: 97%;
}
</style>
