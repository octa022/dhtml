<template>
  <v-app>
    <!-- Navigation Control -->
    <v-navigation-drawer
      app
      clipped
      stateless
      hide-overlay
      permanent
      v-if="$store.getters.getDrawer"
      :mini-variant="$vuetify.breakpoint.name === 'sm' || 
      $vuetify.breakpoint.name === 'xs' ? true : false"
      width='220'>
      <menu_item/>
    </v-navigation-drawer>
    <!-- End - Navigation Control -->
    
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
        <span>DHTML</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="!$store.getters.getDrawerRight" icon 
        @click="showdraw()">
        <v-icon class="white--text">fa-bars</v-icon>
      </v-btn>
      <v-btn v-else icon @click="$store.dispatch('setDrawerRight')">
        <v-icon class="white--text">fa-pencil-alt</v-icon>
      </v-btn>
    </v-toolbar>
    <!-- End - Nav -->

    <!-- Content -->
    <v-content>
      <router-view/>
      <!-- <HelloWorld/> -->
    </v-content>
    <!-- End - Content -->
    
    <!-- Footer -->
    <v-footer class="grey darken-2 white--text">
      <v-layout justify-center row wrap>
        <span class="caption">Anatilicom - &copy; 2019</span>
      </v-layout>
  </v-footer>
  <!-- End - Footer -->
  </v-app>
</template>

<script>
import menu from './components/navigation/Menu.vue'

export default {
  name: 'App',
  components: {
     menu_item:menu
  },
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
