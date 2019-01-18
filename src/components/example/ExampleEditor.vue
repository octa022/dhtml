<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex xs12>
        <h2 class="display-2 pb-2 text-xs-center">UIEditor</h2> 
        <p class="headline text-xs-justify">
          Genial, en esta sección vamos a entender de una forma rápida y practica como funciona el ejemplo llamado 
          “Editor”, el cual consiste en generar elementos en el DOM, con una función encargada de simular 
          un DOM virtual que interpreta todos los componentes de vue. 
        </p>
        <p class="headline text-xs-justify">
          Debemos tener claro que dicho ejemplo lo componen aproximadamente 5 archivos, y el proceso de anexo de componentes se 
          realizó en VueJS. Dichos archivos son:
        </p>
        <ul>
          <li> <h3>toolsPanel.vue</h3></li>
          <li> <h3>uieditor.vue</h3></li>
          <li> <h3>container.vue</h3></li>
          <li> <h3>container.js</h3></li>
          <li> <h3>Layout.vue</h3></li>
        </ul>
        <p class="headline text-xs-justify pt-3">
          A continuación describiremos brevemente que acción o conjunto de ellas realiza cada archivo antes nombrado.
        </p>
        <h2 class="display-1 text-sm-center py-3">Layout.vue</h2>
        <p class="headline text-xs-justify py-3">
          El Layout.vue es un componente que en su interior tiene varias estructuras predefinidas, en este caso Layouts 
          como su nombre nos indica.
        </p>
        <v-flex xs12>
          <img style="width: 700px;" src="@/../public/img/layouts.png">          
        </v-flex>
        <p class="headline text-xs-justify py-3">
          Cada área representada anteriormente es un contenedor distinto, el cual se renderizará mediante una 
          condicional que evalué el número de ítems que se le indique representar. Un ejemplo de código del template del 
          mismo es:
        </p>
  <pre class="language-html">
    <code style="box-shadow: none;">
      &lt;template>
      &lt;v-container grid-list-xs>
        &lt;v-layout row wrap block v-if="mode == 1">
          &lt;v-layout row wrap>
            &lt;v-flex xs12 style="border: 1px solid black" pa-4>
              &lt;v-flex xs12 style="border: 1px blue solid; background-color: red;">
              secuencia 2
              &lt;/v-flex>
            &lt;/v-flex>
          &lt;/v-layout>
          &lt;v-btn icon class="trash" @click="deleteElement()">&lt;v-icon>fa-trash-alt&lt;/v-icon>&lt;/v-btn>
        &lt;/v-layout>
      &lt;/v-container>
      &lt;/template>
    </code>
  </pre>
        <p class="headline text-xs-justify py-3">
          Cabe resaltar que en el script se encuentran las características de dichos elementos y una función para 
          eliminarlos. Un ejemplo del código del Script del mismo es:
        </p>
  <pre class="language-js">
    <code style="box-shadow: none;">
        export default {
          props:{
            idname:String,
            parent:String,
            mode:Number
          },
          methods:{
            deleteElement( ){
              this.$parent.$parent.removeElement({
                keyname:this.idname
              })
            }
          }
        }
    </code>
  </pre>
        <h2 class="display-1 text-sm-center py-4">toolsPanel.vue</h2>
        <p class="headline text-xs-justify py-3">
          El Toolspanel como su nombre lo dice es una caja de herramientas la cual posee botones con los componentes
          disponibles, al hacer click en alguno de estos este panel emite una señal para crear un elemento con el nombre 
          de la etiqueta y las características del componente(opciones). en el bloque principal, mediante una función (@click=createRow(n)).        
        </p>
        <v-flex xs12>
          <img style="width: 200px;" src="@/../public/img/toolsPanel.png">          
        </v-flex>
        <p class="headline text-xs-justify py-3">
          Un ejemplo de código del template del mismo es:
        </p>
  <pre class="language-html">
    <code style="box-shadow: none;">
      &lt;template>
        &lt;v-layout row wrap class="text-xs-center">
          &lt;v-flex xs12>
            &lt;h3 class="text-sm-center text-uppercase">Panel de Herramientas&lt;/h3>
          &lt;/v-flex>
          &lt;v-flex pt-3 xs12>
            &lt;h4 class="text-sm-center">&lt;u>Toolbars&lt;/u>&lt;/h4>
          &lt;/v-flex>
          &lt;v-flex xs12 sm6>
            &lt;v-btn class="sec2" @click="createToolBar(1)">
              &lt;v-icon>fab fa-windows&lt;/v-icon>
            &lt;/v-btn>
          &lt;/v-flex>
          &lt;v-flex xs12 sm6>
        &lt;/v-layout>
      &lt;/template>
    </code>
  </pre>
        <p class="headline text-xs-justify py-3">
          Cabe resaltar que en el script se encuentran los datos del los elementos representados y la función para 
          crear dichos elementos.Un ejemplo del código del Script del mismo es:
        </p>
  <pre class="language-js">
    <code style="box-shadow: none;">
  export default{
  // {
  //   props:{
  //     idname: elementkey,
  //     mode: evt.number
  //   },
  //   key: elementkey
  // }
  methods:{
    createRow(number){
      this.$emit("createElement",{
        "tag": "layout",
        "options":{
          props:{
            mode:number
          }
        }
      })
    },
  } 
}
    </code>
  </pre>
        <h2 class="display-1 text-sm-center py-4">Container.vue y Container.js</h2>
        <p class="headline text-xs-justify py-3">
          El container.vue monitorea el toolspanel. Al detectar el evento (createElement), 
          se enviá dicha información a la función para luego remitirla al VueComponent (addElement($event)).
        </p>
        <p class="headline text-xs-justify pb-3">
          En el Template se llaman al componente uieditor y se crea la barra de herramientas, cabe destacar que 
          se deja al componente esperando el emit desde el toolPanel.vue. Un ejemplo de código del template del mismo es:
        </p>
  <pre class="language-html">
    <code style="box-shadow: none;">
      &lt;template>
      &lt;v-container fluid>
        &lt;uieditor ref="ui">&lt;/uieditor>
        &lt;v-navigation-drawer
            stateless
            right
            v-if="$store.getters.getDrawerRight"
            clipped
            permanent
            hide-overlay
            app
            class="pa-2"
            width='220'
          >
            &lt;toolspanel @createElement="addElement($event)">&lt;/toolspanel>
          &lt;/v-navigation-drawer>
      &lt;/v-container>
      &lt;/template>
      &lt;script src="./container.js">&lt;/script>
    </code>
  </pre>
        <p class="headline text-xs-justify py-3">
          Cabe resaltar que en el script se importan los componentes uieditor y toolspanel, por otra parte, se hace notar
          la redirección  de la petición emitida por el toolspanel.vue al componente con la referencia ui (En este caso es 
          el componente uieditor.vue en la llamada realizada en el container.vue).Un ejemplo del código del Script del 
          mismo es:
        </p>
  <pre class="language-js">
    <code style="box-shadow: none;">
      import uieditor from "./uieditor.vue"
      import toolspanel from "../navigation/ToolsPanel.vue"

      export default {
        components:{
          'uieditor' : uieditor,
          "toolspanel" : toolspanel,
        },
        data(){
          return{
            hidden : false
          }
        },
        methods:{
          addElement(evt){
            this.$refs.ui.addElement(evt)
          }
        }
      }
    </code>
  </pre>
        <h2 class="display-1 text-sm-center py-4">uieditor.vue</h2>
        <p class="headline text-xs-justify py-3">
          En este componente se realiza la magia (Por decirle de alguna forma), pues aquí solo se encuentra un script en 
          el cual se recibe la información del componente a crear y los renderiza mediante la función render de VueJS, a 
          su vez, se lleva un orden de los mismos mediante un objeto de listas, como la que se muestra a continuación:
        </p>
  <pre class="language-js">
    <code style="box-shadow: none;">
      let listComponents = {
        "layout":[layout,0],
        "toolbar":[toolbar,0],
        "subtoolbar":[subtoolbar,0],
        "footer":[footer,0]
      }
    </code>
  </pre>
        <p class="headline text-xs-justify py-3">
          Dentro del export default, se encuentran las variables de instancia retornaremos, en este caso se retorna comps, como 
          se muestra a continuación:
        </p>
  <pre class="language-js">
    <code style="box-shadow: none;">
      data(){
        return {
          comps:[]
        }
      },
    </code>
  </pre>
        <p class="headline text-xs-justify py-3">
          Seguimos dentro del export default, pero en esta ocacisión luego del data(){...}, se encuentra la función render,
          la cual se encarga de representar los objetos de la lista e identificar los componentes que son padres y sus 
          hijos. El código es el siguiente:
        </p>
  <pre class="language-js">
    <code style="box-shadow: none;">
      render(createElement){
        var addchildrens = (children) => {
          return children.map((node) => {
            let childrens = this.comps.filter(i => i.parent === node.options.key) 
            return createElement(node.tag,
              JSON.parse(JSON.stringify(node.options)),
              childrens.length > 0 ? addchildrens(childrens):''
            )
          })
        }
        return createElement(draggable,this.comps.map((val)=>{
          if(val.parent == undefined || val.parent == ""){
            let childrens = this.comps.filter(i => i.parent === val.options.key)
            return createElement(val.tag, JSON.parse(JSON.stringify(val.options)),
              childrens.length > 0 ? addchildrens(childrens):''
            )
          }
        }))
      },
    </code>
  </pre>
        <p class="headline text-xs-justify py-3">
          Aún dentro del export default, pero justo debajo de la función render(...){...}, se encuentran los metodos a ejecutar, 
          en este caso, son la función addElement(...){...}, la cual recibe la información de cada objeto a crear 
          y lo agrega al lista comps. Por otra parte se encuentra la función removeElement(...){...}, la cual recibe el index 
          del elemento a eliminar, lo busca en comps y lo elimina. El código es el siguiente:
        </p>
  <pre class="language-js">
    <code style="box-shadow: none;">
       methods:{
        addElement(evt){
          // let listComponents = {
          //   "layout":[layout,0],
          //   "toolbar":[toolbar,0],
          //   "subtoolbar":[subtoolbar,0],
          //   "footer":[footer,0]
          // }
          listComponents[evt.tag][1] += 1
          //evt.tag+'_'+listComponents[evt.tag][1]
          //example layout_1
          let elementkey = `${evt.tag}_${listComponents[evt.tag][1]}` 
          let instanceVue = listComponents[evt.tag][0]
          //console.log("key",elementkey)
          evt.options.key = elementkey
          evt.options.props.idname = elementkey
          this.comps.push({
            tag:instanceVue,
            options:evt.options,
            parent: evt.parent === undefined ? "" : evt.parent
          })
        },
        removeElement(evt){
          let i = this.comps.findIndex(j => j.options.key === evt.keyname)
          this.comps.splice(i,1)
        }
      }
    </code>
  </pre>
        <p class="headline text-xs-justify py-3">
          De este modo se crean elementos en el DOM de la web ya cargada, dando posibilidades infinitas al ligarlo con ideas geniales.
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>
