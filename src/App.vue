<template>
  <v-app>
    <!-- Nav -->
    <v-toolbar app fixed clipped-left clipped-right class="grey darken-2 white--text">
      <v-btn flat icon to='/' outline color="transparent">
        <v-avatar 
          :size="$vuetify.breakpoint.name === 'sm' || $vuetify.breakpoint.name === 'xs' ? 36 : 50" color="grey lighten-3"
        >
          <img src="../public/analiticom.jpg" alt="avatar">
        </v-avatar>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title class="headline text-uppercase">
        <span>GDC</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="$store.dispatch('setDrawerRight')">
        <v-icon class="white--text">fa-pencil-alt</v-icon>
      </v-btn>
    </v-toolbar>
    <!-- End - Nav -->

    <!-- Content -->
    <v-content>
      <router-view/>
    </v-content>
    <!-- End - Content -->
    
    <!-- Footer -->
    <!-- <v-footer class="grey darken-2 white--text">
      <v-layout justify-center row wrap>
        <span class="caption">Anatilicom - &copy; 2019</span>
      </v-layout>
    </v-footer> -->
    <!-- End - Footer -->
  </v-app>
</template>

<script>
export default {
  name: 'App',
  methods:{
    showdraw(){
      this.$store.dispatch('setDrawer')
    }
  },
  data(){
    return {
      drawer: this.$store.getters.getDrawer
    }
  }
}
</script>
