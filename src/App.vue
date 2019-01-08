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
      width='260'>
      <menu_item/>
    </v-navigation-drawer>
    <!-- End - Navigation Control -->

    <v-toolbar app fixed clipped-left>
      <v-toolbar-title class="headline text-uppercase">
        <span>DHTML</span>
        <!-- <span class="font-weight-light">MATERIAL DESIGN</span> -->
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn> -->
      <v-btn icon @click.stop="drawer = !drawer">
        <v-icon>menu</v-icon>
        </v-btn>
    </v-toolbar>

    <v-content>
      <router-view/>
      <!-- <HelloWorld/> -->
    </v-content>
    <v-footer app>
    <v-layout justify-center row wrap>
      <!-- <p>{{$t("footer.copyright")}}</p> -->
      <p>Made in <i class="fa fa-users" aria-hidden="true"></i> by ANALITICOM</p>
    </v-layout>
  </v-footer>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import menu from './components/navigation/Menu.vue'


export default {
  name: 'App',
  components: {
    // HelloWorld,
     menu_item:menu,
  },
  data () {
    return {
      drawer: null,
    }
  }
}
</script>
