<template>
<div id="app">
  <v-app id="inspire">    
    <h3 class="display-1 font-weight-bold">
      <v-row  justify="center">
        <v-flex xs12>
                <v-img :src="require('../assets/logo.png')" class="my-3" contain height="200"></v-img>
            </v-flex>
        Histórico de despesas
      </v-row>
    </h3>
    <p> </p>
    <p class="text-center"> Gráficos gerados utilizando as informações disponíveis da casa em questão.</p>
    <form>
   
      <v-card class="mb-3">
            <v-card-title primary-title><h4 class="title">Divisão dos gastos do último mês:</h4></v-card-title>
            <v-card-text>
                <apexchart height="320" type="donut" :options="chartOptions" :series="series"></apexchart>
            </v-card-text>
      </v-card>

      </v-card-actions>
      <v-card-actions class="justify-center">
        <v-btn primary color="success" to="/house">
          Voltar
        </v-btn>
      </v-card-actions>
    </v-col>  
     </form>
     
  </v-app>
</div>
</template>


<script>

</script>
