<template>
    <v-container>
        <v-row justify="center">
            <v-flex xs12>
                <v-img
                    :src="require('../assets/logo.png')"
                    class="my-3"
                    contain
                    height="200"
                ></v-img>
            </v-flex>
            <h3 class="display-1 font-weight-bold">{{ house.name }}</h3>
        </v-row>
        
        <v-container>
            <p>Pago do mês total da casa</p>
            <v-progress-linear
                :value="pago"
                :color="pago > 80 ? 'green' : 'red'"
                height="15"
                width="10"
            >
                <template v-slot="{ value }">
                    <strong>{{ Math.ceil(value) }}%</strong>
                </template>
            </v-progress-linear>
        </v-container>
        <v-card>
            <v-tabs
            v-model="tab"
            background-color="deep-purple accent-4"
            centered
            dark
            >
            <v-tabs-slider></v-tabs-slider>

            <v-tab href="#tab-1">
                Geral
            </v-tab>

            <v-tab href="#tab-2">
                Membros
            </v-tab>

            <v-tab href="#tab-3">
                Relatórios
            </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
                <v-tab-item value="tab-1" >
                    <v-row justify="center">
                        <v-card color="#404040" dark height="100%" width="90%">
                            <v-card-title class="headline justify-center">
                                Despesas do mês</v-card-title
                            >
                        </v-card>
                    </v-row>
                </v-tab-item>

                <v-tab-item value="tab-2" >
                    <Members />
                </v-tab-item>

                <v-tab-item value="tab-3" >
                    <Statistics />
                </v-tab-item>

            </v-tabs-items>
        </v-card>

    </v-container>
</template>

<script>
import Members from '../components/Members';
import Statistics from '../components/Statistics';
export default {
    components: {
        Members,
        Statistics
    },
    data: () => ({
        pago: 50,
        tab: 'tab-1',
        house: {
            name: '-',
            id: 0,
            admin_id: 0,
        }

    }),
    async created(){
        try {
            let { house } = await this.$root.$request(`house/${this.$route.params.id}`);
            this.house = house;
        } catch (err) {
            alert(err.error);
        }
    }
}
</script>
