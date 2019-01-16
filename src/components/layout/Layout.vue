<template>
  <v-container grid-list-xs>
    <v-layout row wrap block v-if="mode == 1">
      <v-layout row wrap>
        <v-flex xs12 style="border: 1px solid black" pa-4>
          <v-flex xs12 style="border: 1px blue solid; background-color: red;">
          secuencia 2
          </v-flex>
        </v-flex>
      </v-layout>
      <v-btn icon class="trash" @click="deleteElement()"><v-icon>fa-trash-alt</v-icon></v-btn>
    </v-layout>
    <v-layout row block wrap v-if="mode == 2">
      <!-- <v-layout row wrap> -->
        <v-flex xs6 pa-1 style="border: 1px solid gray">
        <!-- <v-layout row wrap> -->
          <v-flex xs12 pa-1 style="border: 1px dashed gray">
            SEC-5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eveniet aperiam incidunt ad modi consectetur dicta nam nihil, sunt aut harum voluptatum possimus officiis nemo officia soluta adipisci odio, velit.
          </v-flex>
          <v-flex xs12 pa-1 style="border: 1px dashed gray">
            SEC-6 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus soluta ducimus architecto adipisci, voluptatum. Quisquam magni inventore veniam mollitia, sapiente aspernatur consectetur commodi autem eius dolores atque officiis. Cumque, esse.
          </v-flex>
        <!-- </v-layout> -->
        </v-flex>
        <v-flex xs6 pa-1 style="border: 1px solid gray">
          <!-- v-layout row wrap -->
            <v-flex xs12 class="pa-1" style="border: 1px dashed gray">
              SEC-8 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eveniet aperiam incidunt ad modi consectetur dicta nam nihil, sunt aut harum voluptatum possimus officiis nemo officia soluta adipisci odio, velit.
            </v-flex>
            <v-flex xs12 class="pa-1" style="border: 1px dashed gray">
              SEC-9 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus soluta ducimus architecto adipisci, voluptatum. Quisquam magni inventore veniam mollitia, sapiente aspernatur consectetur commodi autem eius dolores atque officiis. Cumque, esse.
            </v-flex>
          <!-- /v-layout -->
        </v-flex>
        <v-btn icon class="trash" @click="deleteElement()"><v-icon >fa-trash-alt</v-icon></v-btn>
      <!-- </v-layout> -->
    </v-layout>
    <v-layout row wrap block v-if="mode == 3">
      <!-- <v-layout row wrap> -->
        <v-flex xs4 style="border: 1px solid black" pa-4>
          <v-flex xs12 style="border: 1px blue solid; background-color: red;" pa-4>
            secuencia 11 
          </v-flex>
        </v-flex>
        <v-flex xs8 style="border: 1px solid black" pa-4>
          <v-flex xs12 style="border: 1px blue solid; background-color: blue;" pa-4>
            secuencia 12 
          </v-flex>
        </v-flex>
      <!-- </v-layout> -->
      <v-btn icon class="trash" @click="deleteElement()"><v-icon >fa-trash-alt</v-icon></v-btn>
    </v-layout>
    <v-layout row wrap v-if="mode == 4">
      <v-layout row wrap>
        <v-flex xs12 style="border: 1px solid black" pa-4>
        <v-flex xs12 style="border: 1px blue solid; background-color: red;">
          secuencia 13 
        </v-flex>
      </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
  </template>
<script>
  export default {
    props:{
      idname:String,
      parent:String,
      mode:Number
    },
    methods:{
      deleteElement(){
        this.$parent.removeElement({
          keyname:this.idname
        })
      }
    }
  }
</script>