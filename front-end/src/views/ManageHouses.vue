<template>
    <v-container>
        <v-item-group>
            <v-row>
                <v-col v-for="house in houses" :key="house.id" cols="12" md="4">
                    <v-item v-slot:default="{ active, toggle }">
                        <v-card class="mx-auto" max-width="450" :to="{name: 'house', params: {id: house.id}}">
                            <v-img
                                src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
                                :aspect-ratio="16 / 9"
                            >
                            </v-img>
                            <v-card-title>
                                <div class="display-1 mb-2">
                                    {{ house.name }}
                                </div>
                                <!-- <div
                                    class="title font-weight-regular grey--text"
                                >
                                    Uma casa da pesada,e os moradores entram em
                                    várias encrencas
                                </div> -->
                            </v-card-title>

                            <v-divider class="mt-6 mx-4"></v-divider>

                            <v-card-text align="right">
                                <v-chip class="mr-3" disabled >
                                    <v-icon left>mdi-delete</v-icon>
                                    Deletar Casa
                                </v-chip>
                            </v-card-text>
                        </v-card>
                    </v-item>
                </v-col>
            </v-row>
        <v-row justify="center">
            <v-btn color="success"  to="/AddHouse" fab x-large dark>
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </v-row>
    </v-item-group>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        houses: [],
    }),
    async created() {
        let { houses } = await this.$root.$request('house');
        this.houses = houses;
    },
}
</script>
