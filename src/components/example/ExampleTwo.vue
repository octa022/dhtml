<template>
  <v-container>
    <v-layout row wrap v-for="(item, index) in containers" :key="item" style="position:relative" class="px-3  ">
      <!-- <v-btn @click="deleteContainer(index)">X</v-btn> -->
      <v-flex sm8>
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

      <button @click="deleteContainer(index)" style="position:absolute;right:0px;top:0px">x</button>
    </v-layout>

    <v-btn color="success" @click="addContent" class="ma-5"  >Agregar</v-btn>

  </v-container>
</template>

<script>
  export default {
    data(){
      return {
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