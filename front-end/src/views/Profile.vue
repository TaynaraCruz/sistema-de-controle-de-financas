<template>
    <v-container>
        <v-row>
            <v-col class="align-center justify-center text-center">
                <v-avatar :color="color" :size="size">
                    <span><strong>{{ iniciais }}</strong></span>
                </v-avatar>
            </v-col>
        </v-row>
        <v-row justify="space-around">
            <v-col class="align-center justify-center text-center" sm="6">
                <v-form ref="form" v-model="valid" >
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
                        type="password"
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
                            type="password"
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
                        @click="save"
                    >
                        Salvar
                    </v-btn>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { getUser } from '../login';
export default {
    data() {
        return {
            color: 'blue',
            size: 150,
            txtColor: 'white',
            txtSize: 16,
            emailSize: 8,
            email: '',
            senha: '',
            senha2: '',
            renda: 0,
            nome: '',
            id: 0,
        };
    },
    computed: {
        iniciais () {
            return (this.nome||'-').split(' ').map(g => g.length > 2 ? g[0] : '').join('');
        },
    },
    async created(){
        try {
            let { user } = await this.$root.$request('user');
            this.nome = user.name;
            this.renda = user.income;
            this.email = user.email;
            this.id = user.id;
        } catch (err) {
            alert('deu merda irmão: ' + err.error);
        }
    },
    methods: {
        async save(){
            let payload = {
                id: this.id,
                name: this.nome,
                income: this.renda,
                email: this.email,
            };
            if (this.senha){
                if(this.senha2 !== this.senha){
                    alert('deu ruim time: senhas não coincidem!');
                    return;
                }
                payload.password = this.senha;
            }
            let res = await this.$root.$request('user/edit', payload);
            alert('deu certo time: usuário alterado com sucesso!');
        },

    }
};
</script>
<style scoped>
.v-divider {
    margin: 0 auto;
    max-width: 97%;
}
</style>
