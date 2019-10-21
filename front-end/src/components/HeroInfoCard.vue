<template>
    <v-card
        :color="color"
        :class="{ 'white--text': dark }"
        class="mb-3"
        :flat="flat"
    >
        <v-img contain max-height="80vh" v-if="top" :src="hero.imagemUrl" />
        <v-layout row justify-space-between class="py-2">
            <v-flex>
                <v-card-title primary-title class="pb-0">
                    <div>
                        <div class="headline">{{ hero.nome }}</div>
                        <div>{{ hero.dataCriacao }} ({{ hero.empresa }})</div>
                        <div class="mb-2">
                            <strong>Alinhamento:</strong> {{ hero.alinhamento }}
                        </div>
                    </div>
                </v-card-title>
                <v-card-text class="pt-0">
                    <div class="mt-2" v-if="hero.raca">
                        <strong>Raça:</strong> {{ hero.raca }}
                    </div>
                    <div v-if="hero.sexo">
                        <strong>Sexo:</strong> {{ hero.sexo }}
                    </div>
                    <div v-if="hero.corPele">
                        <strong>Cor da Pele:</strong> {{ hero.corPele }}
                    </div>
                    <div v-if="hero.corCabelo">
                        <strong>Cor do cabelo:</strong> {{ hero.corCabelo }}
                    </div>
                    <div v-if="hero.corOlho">
                        <strong>Cor dos olhos:</strong> {{ hero.corOlho }}
                    </div>
                </v-card-text>
            </v-flex>
            <v-flex xs5 v-if="!top">
                <v-img :src="hero.imagemUrl" height="40vh" contain></v-img>
            </v-flex>
        </v-layout>
        <div class="text-xs-center" v-if="!withPowers">
            <v-divider light></v-divider>
            <v-btn round outline :dark="dark" @click="toggleShowPower">{{
                showPowers ? 'Ocultar poderes' : 'Mostrar poderes'
            }}</v-btn>
        </div>
        <v-divider v-show="showPowers" light></v-divider>
        <v-slide-y-transition>
            <v-card-text v-show="showPowers">
                <div class="title mb-4">Poderes</div>
                <div v-if="hero.poderes && hero.poderes.length === 0">
                    Nenhum poder
                </div>
                <v-card
                    class="mb-2"
                    v-for="poder in hero.poderes"
                    :key="poder.nome"
                    :flat="flat"
                    tile
                >
                    <v-card-title
                        ><h4>{{ poder.nome }}</h4></v-card-title
                    >
                    <v-card-text>{{ poder.descricao }}</v-card-text>
                </v-card>
            </v-card-text>
        </v-slide-y-transition>
        <v-divider v-if="$slots.actions" light />
        <v-card-actions v-if="$slots.actions">
            <slot name="actions" />
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props: {
        hero: {
            type: Object,
            required: true,
        },
        color: {
            type: String,
            default: 'purple darken-1',
        },
        withPowers: {
            type: Boolean,
            default: false,
        },
        dark: {
            type: Boolean,
            default: false,
        },
        flat: {
            type: Boolean,
            default: false,
        },
        top: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            showPowers: this.withPowers,
        };
    },
    methods: {
        toggleShowPower() {
            this.showPowers = !this.showPowers;
        },
    },
};
</script>
