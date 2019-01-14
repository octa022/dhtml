<template>
  <v-layout row wrap class="text-xs-center">
    <v-flex xs12>
      <h3 class="text-sm-center">Panel de Herramientas</h3>
    </v-flex>
    <v-flex xs12 sm6>
      <v-btn class="sec2">
        <v-icon>fab fa-windows</v-icon>
      </v-btn>
    </v-flex>
    <v-flex xs12 sm6>
      <v-btn class="sec3">
        <div v-for="item in 2" :key="item">
          <div v-for="item in 2" :key="item"></div>
        </div>
      </v-btn>
    </v-flex>
    <v-flex xs12 sm6>
      <v-btn class="sec10">
        <div v-for="item in 2" :key="item">
          <div v-for="item in 2" :key="item"></div>
        </div>
      </v-btn>
    </v-flex>
     <v-flex xs12 sm6>
      <v-btn class="sec13"></v-btn>
    </v-flex>
  </v-layout>
</template>