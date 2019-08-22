<template>
  <v-toolbar height="30" class="block grey lighten-2 white--text" v-if="mode == 1">
    <v-spacer></v-spacer>
    <v-btn icon class="mx-0"><v-icon small>far fa-circle</v-icon></v-btn>
    <v-btn icon class="mx-0"><v-icon small>far fa-circle</v-icon></v-btn>
    <v-btn icon class="mx-0"><v-icon small>far fa-circle</v-icon></v-btn>
    <v-btn icon class="trash" @click="deleteElement()"><v-icon>fa-trash-alt</v-icon></v-btn>
  </v-toolbar>
</template>
<script>
  export default {
    props:{
      idname:Number,
      mode:Number
    },
    methods:{
        deleteElement(){
          this.$parent.$parent.removeElement({
            keyname:this.idname
          })
        }
      }
  }
</script>