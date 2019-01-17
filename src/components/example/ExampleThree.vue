<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <div></div>
      <v-flex xs4 class="">
        <div class="sticky">
          <h2 class="text-sm-center pb-2">Arrastra y Suelta los elementos de abajo</h2>
          <draggable class="drag1" :list="list.upvotes">
            <transition-group>
              <div class="elementList" v-for="element in list" :key="element">
                <h2>{{element}}</h2>
              </div>
            </transition-group>
          </draggable>
        </div>
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
        <p class="headline">También se puede usar mediante su cdn:</p>
        <pre class="language-html">
    <code>
    &lt;!-- CDNJS :: Sortable (https://cdnjs.com/) --&gt;
    &lt;script src="//cdn.jsdelivr.net/npm/sortablejs@1.7.0/Sortable.min.js"&gt; &lt;/script&gt;
    &lt;!-- CDNJS :: Vue.Draggable (https://cdnjs.com/) --&gt;
    &lt;script src="//cdnjs.cloudflare.com/ajax/libs/Vue.Draggable/2.15.0/vuedraggable.min.js"&gt; &lt;/script&gt;
    </code>
        </pre>

        <h3 class="display-1 pb-2"> Como Usar Vue.Draggable</h3> 

        <p class="headline">Uso típico del del Componente:</p>

        <pre class="language-html">
  <code>
    &lt;draggable v-model="myArray">
      &lt;transition-group>
        &lt;div v-for="element in myArray" :key="element">
          &lt;span> &#123; &#123; element &#125; &#125; &lt;/span>
        &lt;/div>
      &lt;/transition-group>
    &lt;/draggable>
  </code>
        </pre>

        <p class="headline text-xs-justify">En el cuerpo del template se hace el llamado a la etiqueta con la cual se llamo componente, en ella se aprecia la estructura interna base, en la cual se realizara la transición al momento de la ejecución de drag-and-drop.</p>

        <pre class="language-js">
  <code>
    import draggable from 'vuedraggable'
    export default {
      components:{
        draggable
      },
      data(){
        return{
          myArray: [
            .
            .
            .
          ]
        }
      }
    }
  </code>
        </pre>

        <p class="headline text-xs-justify">En el script de la aplicación se hace la importación de la librería, la asignación de la etiqueta que se llamara en el template. También se envían por parámetros una lista de elementos para renderizarlos en el template.</p>

        <h3 class="display-1">Ejemplo:</h3>

        <pre class="language-html">
  <code>
    &lt;template>
     &lt;h2>Arrastra y Suelta los elementos de abajo &lt;/h2>
     &lt;draggable class="drag1" :list="list">
       &lt;transition-group>
         &lt;div class="elementList" v-for="element in list" :key="element">
           &lt;h2>{ { element } } &lt;/h2>
         &lt;/div>
       &lt;/transition-group>
     &lt;/draggable>
    &lt;/template>

    &lt;script>
      import draggable from 'vuedraggable'
      export default {
        data(){
          return{
            list: [
              "Elemento 1",
              "Elemento 2",
              "Elemento 3",
              "Elemento 4"
            ]
          }
        },
        components:{
          draggable
        }
      }
    &lt;/script>
    &lt;style>
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
    &lt;/style>
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
        "Elemento 1",
        "Elemento 2",
        "Elemento 3",
        "Elemento 4"
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
