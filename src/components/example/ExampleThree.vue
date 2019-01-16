<template>
  <v-container grid-list-xs style="border: 1px solid red">
    <v-layout row wrap>
      <v-flex xs4>
        <h2 class="text-sm-center pb-2">Arrastra y Suelta los elementos de abajo</h2>
          <draggable class="drag1" :list="list.upvotes">
            <transition-group>
              <div class="elementList" v-for="element in list" :key="element">
                      <h2>{{element}}</h2>
              </div>
            </transition-group>
        </draggable>
      </v-flex>
      <v-flex xs8 style="border: 1px solid red">
        <h2>Draggable</h2>
        <pre class="language-html">
          <code style="box-shadow: none;">
          &lt;script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.4.2/vue.min.js"&gt;&lt;/script&gt;
          </code>
        </pre>

        <pre class="language-html">
          <code style="box-shadow: none;">
            &lt;h1&gt;Contenido aqui&lt;/h1&gt;
          </code>
          <code style="box-shadow: none;">
            &lt;h1>Contenido 2&lt;/h1>
          </code>
        </pre>
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
