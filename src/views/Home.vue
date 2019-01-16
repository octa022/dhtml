<template>
  <!-- <HelloWorld /> -->
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex mb-4>
        <h1 class="main-title">DHTML</h1>
        <p class="subheading font-weight-regular font-zcool">
          HTML Dinámico
        </p>
      </v-flex>

    </v-layout>
    <h1>{{list}}</h1>
    <v-layout class="drag">
      <draggable :list="list.upvotes">
          <transition-group>
            <div v-for="element in list" :key="element">
                    <h2>{{element}}</h2>
            </div>
          </transition-group>
      </draggable>
    </v-layout>
  </v-container>
</template>

<script>
//Importamos la el componente   
  import draggable from 'vuedraggable'

  export default {
  data () {
      return {
          list: [
          //array of objects
          "hola",
          "octavio",
          "migue",
          "alejandro",
          ]
      }
  },
  components: {
      draggable
  }
  }
</script>
