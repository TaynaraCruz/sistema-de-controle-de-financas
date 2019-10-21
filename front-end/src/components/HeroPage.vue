<template>
    <div>
        <v-card
            tile
            flat
            :color="color"
            :class="noOverflow ? 'pb-1' : 'pb-5 hero'"
        >
            <v-container>
                <v-card-title v-if="$slots.icon || $slots.title">
                    <v-layout align-center justify-start row fill-height>
                        <v-avatar
                            size="48"
                            :color="color + ' darken-3'"
                            class="elevation-2 mr-3 title"
                            v-if="$slots.icon"
                        >
                            <slot name="icon" />
                        </v-avatar>
                        <h2
                            class="headline font-weight-black text-uppercase"
                            :class="{ 'white--text': dark }"
                        >
                            <slot name="title" />
                        </h2>
                    </v-layout>
                </v-card-title>
                <v-card-text>
                    <h1
                        class="display-1 font-weight-regular"
                        :class="{ 'white--text': dark }"
                    >
                        <slot name="headline" />
                    </h1>
                </v-card-text>
            </v-container>
        </v-card>
        <v-container>
            <slot />
        </v-container>
    </div>
</template>

<script>
export default {
    props: {
        dark: {
            type: Boolean,
            default: false,
        },
        color: {
            type: String,
            default: 'blue',
        },
        noOverflow: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style scoped>
.hero {
    margin-bottom: -4.5em;
}
</style>
