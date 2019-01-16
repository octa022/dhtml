<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex lg12>
        <h1>Arrastra y Suelta los elementos de abajo</h1> <br><br>
        <h1>Lista</h1> <br><br>
        <v-flex lg4>
            <draggable class="drag1" :list="list.upvotes">
              <transition-group>
                <div class="elementList" v-for="element in list" :key="element">
                        <h2>{{element}}</h2>
                </div>
              </transition-group>
            </draggable>
        </v-flex> 
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
<style>
.drag1{
  background-color: grey;
  
}
.elementList{
  padding: 4px;
  margin-top: 4px;
  border: solid 1px;
  transition: all 0,5s;
  background-color: white;
}
</style>
