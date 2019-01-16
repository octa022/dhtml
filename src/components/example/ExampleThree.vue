<template>
  <v-container grid-list-xs>
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
      <v-flex xs8 pl-4>

        <h2 class="display-2 pb-2 text-xs-center">Vue.Draggable</h2>

        <p class="headline text-xs-justify">
          Es un Componente de Vue o directiva que permite arrastrar y soltar en sincronización con el view-model. Esta basada en la librería de JavaScript <kbd><a href="http://sortablejs.github.io/Sortable/" target="_blank" style="text-decoration: none; color: white">Sortable</a></kbd>, la cual permite reordenar listas arrastrando y soltando cada elemento en navegadores como en dispositivos táctiles.
        </p>

        <h3 class="display-1 pb-2">Instalación</h3>

        <p class="headline">Para realizar la instalación copiamos en la terminal el siguiente comando:</p>
        <pre class="language-bash">
    <code>
    $ npm i vuedraggable
    </code>
        </pre>
        <p class="headline">También se puede usar mediante su cdn::</p>
        <pre class="language-html">
    <code>
    &lt;!-- CDNJS :: Sortable (https://cdnjs.com/) -->
    &lt;script src="//cdn.jsdelivr.net/npm/sortablejs@1.7.0/Sortable.min.js">&lt;/script>
    &lt;!-- CDNJS :: Vue.Draggable (https://cdnjs.com/) -->
    &lt;script src="//cdnjs.cloudflare.com/ajax/libs/Vue.Draggable/2.15.0/vuedraggable.min.js">&lt;/script>
    </code>
        </pre>

        <p class="headline">Uso típico del del Componente:</p>

        <!-- Ejemplo de Cajas de Codigo -->
        <!-- <pre class="language-html">
          <code>
            &lt;h1&gt;HOLA&lt;/h1&gt;
          </code>
        </pre> -->
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
