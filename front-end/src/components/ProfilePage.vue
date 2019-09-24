<template>
    <v-container>
        <v-layout text-center wrap>
            <v-flex xs12>
                <v-avatar class="align-center justify-center layout text-center"
                :color="color"
                :size="size"
                >
                <img
                    v-if="img"
                    src=''
                    alt="avatar"
                >
                <span v-else>VJ</span>
                </v-avatar>
            </v-flex>
             <v-flex xs12 mt-4>
                <span mt-2>João Gabriel Oliveira Bicalho</span> <!--hard code NAO PODE-->
            </v-flex>
             <v-flex xs12 mt-4>
               <!--Dados do usuario-->
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data(){
            return{
                color: 'red',
                size: '100px',
            };
        }
    }
           

</script>
