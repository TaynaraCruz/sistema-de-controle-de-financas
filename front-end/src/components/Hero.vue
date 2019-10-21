<template>
    <v-card tile flat :color="color" class="pb-5">
        <v-container>
            <v-card-title v-if="$slots.icon || $slots.title">
                <v-layout align-center justify-start row fill-height>
                    <v-avatar
                        size="48"
                        :color="iconColor"
                        class="elevation-1 mr-3 title"
                        v-if="$slots.icon"
                    >
                        <slot name="icon" />
                    </v-avatar>
                    <span
                        class="headline font-weight-black text-uppercase"
                        :class="{ 'white--text': dark }"
                        ><slot name="title"
                    /></span>
                </v-layout>
            </v-card-title>
            <v-card-text
                class="pt-2 display-1 font-weight-light"
                :class="{ 'white--text': dark }"
                ><slot
            /></v-card-text>
        </v-container>
    </v-card>
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
        iconColor: {
            type: String,
            default: 'green',
        },
    },
};
</script>
