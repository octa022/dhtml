<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>Arrastra y Suelta los elementos de abajo</h1> <br><br>
          <draggable :list="list.upvotes">
            <transition-group>
              <div v-for="element in list" :key="element">
                      <h2>{{element}}</h2>
              </div>
            </transition-group>
        </draggable>
      </v-flex> 
    </v-layout>
  </v-container>
</template>
<script>
import draggable from 'vuedraggable'
export default {
  data(){
    return{
      list: [
        "Julian",
        "Octavio",
        "Miguel",
        "Alejandro"
      ]
    }
  },
  components:{
    draggable
  }
}
</script>