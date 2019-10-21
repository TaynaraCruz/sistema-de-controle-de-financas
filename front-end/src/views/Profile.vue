<template>
    <v-container>
        <v-row>
            <v-col class="align-center justify-center text-center">
                <v-avatar :color="color" :size="size">
                    <span>JG</span>
                </v-avatar>
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
                        prepend-icon="mdi-tooltip-edit"
                        required
                    >
                    </v-text-field>

                    <v-text-field
                        v-model="email"
                        label="E-mail"
                        prepend-icon="mdi-tooltip-edit"
                        required
                    >
                    </v-text-field>

                    <v-text-field
                        label="Valor"
                        prepend-icon="mdi-cash-usd"
                        :value="renda"
                        prefix="R$"
                        required
                    >
                    </v-text-field>

                    <v-divider />

                    <v-text-field
                        class="mt-4"
                        v-model="senha"
                        placeholder="Não alterado"
                        label="Senha"
                        prepend-icon="mdi-lock"
                        required
                    >
                    </v-text-field>
                    <transition name="fade" appear>
                        <v-text-field
                            v-model="senha2"
                            v-if="senha"
                            label="Confirmar senha"
                            prepend-icon="mdi-lock"
                            required
                        >
                        </v-text-field>
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
            renda: 250.55,
            nome: 'João Gabriel de Oliveira Bicalho',
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
