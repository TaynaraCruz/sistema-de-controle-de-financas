<template>
    <v-container>
            <v-form ref="form">
                <v-text-field
                    v-model="name"
                    :counter="10"
                    label="Nome"
                    required
                ></v-text-field>

                <v-text-field
                    v-model="email"
                    type="email"
                    label="E-mail"
                    required
                ></v-text-field>

                <v-text-field
                    v-model="income"
                    label="Renda"
                    prefix="R$"
                    required
                ></v-text-field>

                <v-text-field
                    v-model="password"
                    type="password"
                    label="Senha"
                    required
                ></v-text-field>

                <v-text-field
                    v-model="confirmar_senha"
                    type="password"
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

                <v-dialog v-model="dialog" width="500">
                    <template v-slot:activator="{ on }">
                        <v-btn color="blue" dark v-on="on">
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum. <br />
                            Clique em qualquer lugar fora desta janela para
                            fechá-la.
                        </v-card-text>

                        <v-divider></v-divider>
                    </v-card>
                </v-dialog>
                <br />
                <br />
                <br />
                <p :v-if="error">{{error}}</p>
                <v-btn color="success" class="mr-4" @click="validate">
                    Criar Conta
                </v-btn>

            </v-form>
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
        name: '',
        checkbox: false,
        confirmar_senha: '',
        income: 0,
        error: '',
        on: false,
        dialog: false,
    }),
    methods: {
        async validate(){
            try {
                this.error = '';
                if(this.password === this.confirmar_senha){
                    if(this.checkbox){
                        await this.$root.$request('user/new', {
                            name: this.name,
                            income: this.income,
                            email : this.email,
                            password: this.password,
                        });
                        await this.$root.$login(this.email, this.password);
                        alert("Usuário Criado com Sucesso");
                        this.$router.push('/');
                    }else{
                        this.error = 'Deve concordar com os termos de uso';
                    }
                }else{
                    this.error = 'Senhas não coincidem';
                }
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
