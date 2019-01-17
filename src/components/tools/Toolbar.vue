<template>
<v-layout row wrap v-if="mode == 1" class="block">
  <!-- <v-toolbar fixed color="blue-grey" class="white--text"> -->
  <v-toolbar color="blue-grey" class="white--text">
    <v-btn flat icon to='/' outline color="transparent">
      <v-avatar 
        :size="$vuetify.breakpoint.name === 'sm' || $vuetify.breakpoint.name === 'xs' ? 36 : 50" color="grey lighten-3"
      >
        <img src="../../../public/analiticom.jpg" alt="avatar">
      </v-avatar>
    </v-btn>
     <v-spacer></v-spacer>
      <v-toolbar-title class="headline text-uppercase">
        <span>Menú Web PPA</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon class="white--text">fa-bars</v-icon>
      </v-btn>
    <v-btn icon class="trash" @click="deleteElement()"><v-icon>fa-trash-alt</v-icon></v-btn>
  </v-toolbar>
    <div style="width: 100%;color:white;background-color:green">
      <slot name="julian"></slot>
    </div>
</v-layout>
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
        this.$parent.$parent.removeElement({
          keyname:this.idname
        })
      }
    }
}
</script>
