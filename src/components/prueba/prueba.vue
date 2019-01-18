<template>
  <div id="prueba">
    <v-flex px-4 xs12>
      <h2 class="display-2 pb-2 text-xs-center pt-5">Añadiendo Elementos en VueJs</h2> 
      <p class="headline text-xs-justify py-3">
          En esta sección, veremos como crear elementos en el DOM utilizando VueJS. A continuación se cargara 
          texto en el ejemplo mediante un Botón, una lista y un V-For:
      </p>
    </v-flex>
    <v-layout px-4 row wrap>
      <v-flex xs6>
        <div v-for="item in items" :key="item">
          * {{item}}  
        </div>
          <v-btn color="success" @click="items++">Agregar</v-btn>
          <v-btn color="red"  @click="items = Math.max(0, items-1)">Borrar</v-btn>    
      </v-flex>
      <v-flex xs6>
        <div @click="openMenu()">
          <p>El botón se presiono {{ counter }} veces.</p> <br>
          <v-btn color="orange" v-on:click.left="counter += 1">Agregar 1</v-btn>
        </div>    
      </v-flex>
    </v-layout>
    <v-flex px-4 xs12>
      <p class="headline text-xs-justify py-5">
          En este orden de ideas, también podemos representar elementos mas complejos, siguiendo la misma técnica 
          antes mencionada:
      </p>
    </v-flex>  
    <v-layout pa-4 row wrap v-for="(item, index) in containers" :key="item" style="position:relative">
      <!-- <v-btn @click="deleteContainer(index)">X</v-btn> -->
      <v-flex sm8 class="pl-5">
        * {{item.name}} {{index}}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint assumenda, enim eius est ab. Consequuntur ex ut facilis maxime, labore sunt animi aliquid ullam ipsum, voluptate tempora minus consequatur rem.
      </v-flex>
      <v-flex sm4>
        <v-card>
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
            aspect-ratio="2.75"
          ></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
              <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <button @click="deleteContainer(index)" class="px-4" style="position:absolute;right:0;top:0px">x</button>
    </v-layout>

     <v-btn color="success" @click="addContent">Agregar</v-btn>

  </div>
</template>

<script>
  export default {
    data(){
      return {
        items:0,
        counter:0,
        viewMenu: false,
        top: '0px',
        left: '0px',
        containers:[],
        newContainer:0,
      }
    },
     methods: {
        addContent:function() {
          this.containers.push({
            name: this.newContainer++
          });
        },
        deleteContainer:function(index){
          this.containers.splice(index,1)
        }
      }
  }
</script>

