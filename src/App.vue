<template>
  <v-app>
    <!-- Navigation Control -->
    <v-navigation-drawer
      app
      clipped
      stateless
      hide-overlay
      :mini-variant="$vuetify.breakpoint.name === 'sm' || 
      $vuetify.breakpoint.name === 'xs' ? true : false"
      v-model="drawer"
      width='220'>
      <menu_item @editPanel="drawerRight = !drawerRight, drawer = false"/>
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
      <v-btn v-if="drawerRight==false" icon @click.stop="drawer = !drawer">
        <v-icon class="white--text">fa-bars</v-icon>
      </v-btn>
      <v-btn v-else icon @click.stop="drawerRight = !drawerRight, drawer = false">
        <v-icon class="white--text">fa-pencil-alt</v-icon>
      </v-btn>
    </v-toolbar>
    <!-- End - Nav -->

    <!-- Navigation Right -->
    <v-navigation-drawer
      v-model="drawerRight"
      stateless
      right
      clipped
      hide-overlay
      app
      class="pa-2"
    >
      <tools_panel/>
    </v-navigation-drawer>
    <!-- End - Navigation Right -->

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
// import HelloWorld from './components/HelloWorld'
import menu from './components/navigation/Menu.vue'
import tools_panel from './components/navigation/ToolsPanel.vue'


export default {
  name: 'App',
  components: {
    // HelloWorld,
     menu_item:menu,
     tools_panel
  },
  data () {
    return {
      drawer: false,
      drawerRight: false,
    }
  }
}
</script>
